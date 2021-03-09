import axios from 'axios'
import { IUser } from '../@types'

const userUpdate = (user: IUser): Promise<IUser> => axios.put(`/api/users/profile`, user).then(res => res.data)

export {
  userUpdate
}