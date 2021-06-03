import axios from 'axios'
import { IUser } from '../../@types';

const getAllUser = (): Promise<IUser[]> => axios.get('/api/users').then((res) => res.data)

const removeUser = (id: string) => axios.delete(`/api/users/${id}`).then((res) => res.data);

const getUserDetail = (id: string) => axios.get(`/api/users/${id}`).then((res) => res.data);

export { getAllUser, removeUser, getUserDetail }
