import exp from 'express'
import { verifyToken } from "../middlewares/verifyToken.js";
import { register, authenticate } from '../services/authService.js'

export const userRoute = exp.Router()

//Register user
userRoute.post("/users", async (req, res) => {
  //get user obj from req
  let userObj = req.body;
  //call register
  const newUserObj = await register({ ...userObj, role: "USER" });
  //send res
  res.status(201).json({ message: "user created", payload: newUserObj });
});

//Read all articles(protected route)
userRoute.get("/articles", async (req, res) => {
    //read articles with author details
    let articles = await ArticleModel.find({isArticleActive: true}).populate("author", "firstName lastName email");
    //send res
    res.status(200).json({message: "articles retrieved", payload: articles});
});

//Add comment to an article(protected route)
userRoute.put('/user/:uid/article/:aid',verifyToken, async(req,res)=>{
   //get user id and article id
    let {uid,aid} = req.params;
    // find article with active status
    let articeOfDB = await ArticleModel.findOne({_id:aid,isArticleActive:true});
    // if article not found or not active then send res
    if(!articeOfDB){
        return res.status(404).json({message:"article not available"})
    }

    let newArticle = await ArticleModel.findOneAndUpdate(
        {_id:aid},
        {$push:{"comments":{user:uid,comment:req.body.comment}}},
        {new:true}
    )

    res.status(200).json({message:"comment added",payload:newArticle});


});