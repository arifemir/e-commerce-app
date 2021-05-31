import axios from 'axios'
import { IUser } from '../../@types';

const getAllUser = (): Promise<IUser[]> => axios.get('/api/users').then((res) => res.data)

export { getAllUser }