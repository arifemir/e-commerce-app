import axios from 'axios'
import { IUser } from '../@types'

const login = (email: string, password: string): Promise<IUser> => axios.post('/api/users/login', {email, password}).then(res => res.data)

const register = (name: string, email: string, password: string): Promise<IUser> => axios.post('/api/users', {name, email, password}).then(res => res.data)


export {
  login,
  register
}