import exp from 'express'
import { ArticleModel } from '../models/ArticleModel.js'
import { UserTypeModel } from '../models/UserModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import { authenticate } from '../services/authService.js'

export const adminRoute = exp.Router()

// Admin authorization middleware
const checkAdmin = async (req, res, next) => {
  let adminId = req.user?._id || req.body?.adminId
  let admin = await UserTypeModel.findById(adminId)
  
  if (!admin) {
    return res.status(401).json({ message: 'Invalid Admin' })
  }
  
  if (admin.role !== 'ADMIN') {
    return res.status(403).json({ message: 'User is not an Admin' })
  }
  
  if (!admin.isActive) {
    return res.status(403).json({ message: 'Admin account is not active' })
  }
  
  next()
}

//authenticate admin
adminRoute.post('/authenticate', async (req, res) => {
  //get admin cred object
  let adminCred = req.body
  //call authenticate service
  let { token, user } = await authenticate(adminCred)
  //save token as http only cookie
  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false
  })
  //send res
  res.status(200).json({ message: 'admin authenticated', payload: user })
})

//read all articles
adminRoute.get('/articles', verifyToken, checkAdmin, async (req, res) => {
  //read articles with author details
  let articles = await ArticleModel.find().populate('author', 'firstName lastName email')
  //send res
  res.status(200).json({ message: 'articles retrieved', payload: articles })
})

// Block a user
adminRoute.put('/block/:userId',async(req,res)=>{
  try {
    let { userId } = req.params

    let updatedUser = await UserTypeModel.findByIdAndUpdate(
      userId,
      { isActive: false },
      { new: true }
    )

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ message: 'User blocked successfully', payload: updatedUser })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
})

// Unblock a user
adminRoute.put('/unblock/:userId',async(req,res)=>{
  try {
    let { userId } = req.params

    let updatedUser = await UserTypeModel.findByIdAndUpdate(
      userId,
      { isActive: true },
      { new: true }
    )

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json({ message: 'User unblocked successfully', payload: updatedUser })
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message })
  }
})
