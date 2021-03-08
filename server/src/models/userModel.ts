import mongoose, {Schema, Document} from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document {
  name: string,
  email: string,
  password: string,
  isAdmin?: boolean,
  comparePassword: (password: string) => boolean
}

const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
}, {
  timestamps: true,
})

userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model<IUser>('User', userSchema)

export default User