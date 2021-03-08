import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'

const generateToken = (id: Types.ObjectId): string => {
  return jwt.sign({ id }, (process.env.JWT_SECRET as string), {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

export default generateToken