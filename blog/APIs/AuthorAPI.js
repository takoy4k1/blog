import exp from "express";
import { authenticate, register } from "../services/authService.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { UserTypeModel } from "../models/UserModel.js";
import { checkAuthor } from "../middlewares/checkAuthor.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { config } from "dotenv";
config();
import jwt from "jsonwebtoken";



export const authorRoute = exp.Router();

//register author(public)
authorRoute.post("/users", async (req, res, next) => {
//get user obj from req
let userObj = req.body;
//call register 
const newUserObj = await register({
  ...userObj,
  role: "AUTHOR"
});
//send res
res.status(201).json({message: "author registered", payload: newUserObj});
});

//Create article(protected)
authorRoute.post("/articles",verifyToken, checkAuthor, async (req, res, next) => {
  //get article obj from req
    let articleObj = req.body;
    //create article document 
    let newArticleDoc = new ArticleModel(articleObj);
    //save article document
    let createdArticle = await newArticleDoc.save();
    //send res
    res.status(201).json({message: "article created", payload: createdArticle});
});

//read all articles of an author(protected)
authorRoute.get("/articles/:authorId", async (req, res, next) => {
 //get author id
    let authorId = req.params.authorId;

    //read articles of the author
    let articles = await ArticleModel.find({author: authorId, isArticleActive: true});
    //send res
    res.status(200).json({message: "articles retrieved", payload: articles});
});


//edit article(protected)
authorRoute.put("/articles",verifyToken, checkAuthor, async (req, res, next) => {
    //get modified article obj from req
    let {articleId, title, category, content, author} = req.body;
    //find article
    let articleOfDB= await ArticleModel.findOne({_id: articleId, author: author});
    if(!articleOfDB){
        return res.status(401).json({message: "Article not found"});
    }
    //update article
    let updatedArticle = await ArticleModel.findByIdAndUpdate(
        articleId, {
        $set: {title, category, content},
    }, {new: true},
);
    //send res
    res.status(200).json({message: "article updated", payload: updatedArticle});
});

//delete article(soft delete) (protected)
authorRoute.delete("/articles/:articleId", checkAuthor, async (req, res, next) => {
 //http://localhost:4000/user-api/users
//http://localhost:4000/author-api/users

//app.use(checkAuthor)
    //get article id from req
    let articleId = req.params.articleId;
    let authorId = req.body.author || req.params.authorId;
    //find article
    let articleOfDB= await ArticleModel.findOne({_id: articleId, author: authorId});
    if(!articleOfDB){
        return res.status(401).json({message: "Article not found"});
    }
    //soft delete article by setting isArticleActive to false
    await ArticleModel.findByIdAndUpdate(articleId, {
        isArticleActive: false
    });
    //send res
    res.status(200).json({message: "article deleted"});
});