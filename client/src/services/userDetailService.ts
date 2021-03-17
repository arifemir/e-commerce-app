import axios from 'axios';
import { IUserDetail } from '../@types';

const userDetailService = (idOrProfile: string): Promise<IUserDetail> => axios.get(`/api/users/${idOrProfile}`).then(res => res.data);

export { userDetailService };
