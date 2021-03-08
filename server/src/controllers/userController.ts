import User, { IUser } from '../models/userModel'
import a from 'express-async-handler'
import HttpException from "../helpers/exceptions/HttpException";

const authUser = a(async (req, res, next) => {
  const { email: mail, password } = req.body

  const user: IUser = await User.findOne({ email: mail })
  
  if(user && (await user.comparePassword(password))) {
    const { _id, name, email, isAdmin } = user;
    res.json({_id, name, email, isAdmin, token: null})
  } else {
    throw new HttpException(401, 'Invalid email or password')
  }

})

export {
  authUser
}