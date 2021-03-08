import User, { IUser } from '../models/userModel'
import a from 'express-async-handler'
import HttpException from "../helpers/exceptions/HttpException";
import generateToken from '../helpers/token/generateToken';

const authUser = a(async (req, res, next) => {
  const { email: mail, password } = req.body

  const user: IUser = await User.findOne({ email: mail })
  
  if(user && (await user.comparePassword(password))) {
    const { _id, name, email, isAdmin } = user;
    const token = generateToken(_id)
    res.json({_id, name, email, isAdmin, token})
  } else {
    throw new HttpException(401, 'Invalid email or password')
  }

})

export {
  authUser
}