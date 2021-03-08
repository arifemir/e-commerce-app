import User from '../models/userModel'
import { isBearerHave, splitTokenFromBearer } from '../helpers/token/checkAndSplitToken'
import verifyToken from '../helpers/token/verifyToken'
import HttpException from '../helpers/exceptions/HttpException'
import a from 'express-async-handler'

const takeTokenGiveUser = a(async (req: any, res, next) => {
  const {authorization} = req.headers
  let token;

  if(authorization && isBearerHave(authorization)) {
    token = splitTokenFromBearer(authorization)
    let docoded = verifyToken(token)
    req.user = await User.findById((docoded as any).id).select('-password')
  }

  if(!token) {
    throw new HttpException(401, 'Not authorized, no token')
  }

  next()
})

export {
  takeTokenGiveUser
}