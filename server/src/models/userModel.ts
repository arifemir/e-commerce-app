import mongoose, {Schema, Document} from 'mongoose'

export interface IUser extends Document {
  name: string,
  email: string,
  password: string,
  isAdmin: boolean,
}

const userSchema: Schema = new Schema({
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

const User = mongoose.model<IUser>('User', userSchema)

export default User