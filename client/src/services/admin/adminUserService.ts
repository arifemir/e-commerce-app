import axios from 'axios'
import { IUser } from '../../@types';

const getAllUser = (): Promise<IUser[]> => axios.get('/api/users').then((res) => res.data)

const removeUser = (id: string) => axios.delete(`/api/users/${id}`).then((res) => res.data);

const getUserDetail = (id: string): Promise<IUser> => axios.get(`/api/users/${id}`).then((res) => res.data);

const editUserDetail = (id: string, editedUser: IUser): Promise<IUser> => axios.put(`/api/users/${id}`, { editedUser }).then((res) => res.data);

export { getAllUser, removeUser, getUserDetail, editUserDetail }
