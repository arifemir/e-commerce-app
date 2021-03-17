import axios from 'axios'
import { IUser } from '../@types'

const login = (email: string, password: string): Promise<IUser> => axios.post('/api/users/login', { email, password }).then(res => res.data)

const register = (name: string, email: string, password: string): Promise<IUser> =>
  axios.post('/api/users', { name, email, password }).then(res => res.data)

const userUpdate = (user: IUser): Promise<IUser> => axios.put(`/api/users/profile`, user).then(res => res.data)

export { login, register, userUpdate }
