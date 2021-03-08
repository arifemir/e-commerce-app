import User, { IUser } from '../models/userModel'
import a from 'express-async-handler'
import HttpException from "../helpers/exceptions/HttpException";
import generateToken from '../helpers/token/generateToken';

const authUser = a(async (req, res, next) => {
  const { email, password } = req.body

  let user: IUser = await User.findOne({ email })
  
  if(user && (await user.comparePassword(password))) {
    const token = generateToken(user._id)
    res.json({user, token})
  } else {
    throw new HttpException(401, 'Invalid email or password')
  }

})


const getUserProfile = a(async (req, res, next) => {
  const user = (req as any).user
  if(user) {
    res.send(user)
  } else {
    throw new HttpException(404, 'User not found')
  }
})

const registerUser = a(async (req, res, next) => {
  const { name, email, password } = req.body

  const userExist: IUser = await User.findOne({email})

  if(userExist) {
    throw new HttpException(400, 'User already exists')
  } 

  let user: IUser = await User.create({
    name,
    email,
    password,
  })
  
  if(user) {
    const token = generateToken(user._id)
    res.status(201).json({user, token})
  } else {
    throw new HttpException(400, 'Invalid user data')
  }

})

export {
  authUser,
  getUserProfile,
  registerUser,
}