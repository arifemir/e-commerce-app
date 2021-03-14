import axios from 'axios'
import { IUserDetails } from '../@types'

const userDetails = (idOrProfile: string): Promise<IUserDetails> => axios.get(`/api/users/${idOrProfile}`).then(res => res.data)

export {
  userDetails
}