import User from '../models/userModel'
import a from 'express-async-handler'
import HttpException from "../helpers/exceptions/HttpException";

const authUser = a(async (req, res) => {
  const { email, password } = req.body

  res.send(email, password)
})

export {
  authUser
}