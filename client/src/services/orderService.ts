import axios from 'axios';
import { IOrder } from '../@types';

const postOrder = (order: IOrder): Promise<IOrder> => axios.post('/api/orders', order).then(res => res.data);

export { postOrder };
