import axios from 'axios'
import { IUser } from '../@types'

const userDetails = (idOrProfile: string): Promise<IUser> => axios.get(`/api/users/${idOrProfile}`).then(res => res.data)

export {
  userDetails
}