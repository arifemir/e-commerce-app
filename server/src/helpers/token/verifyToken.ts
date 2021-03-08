import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'

export default (token: string) => {
  return jwt.verify(token, (process.env.JWT_SECRET as string))
}
