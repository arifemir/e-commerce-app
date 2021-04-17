import axios from 'axios';
import { IOrder, IOrderDetails } from '../@types';

const postOrder = (order: IOrder): Promise<IOrder> => axios.post('/api/orders', order).then(res => res.data);

const getOrderById = (id: string): Promise<IOrderDetails> => axios.get(`/api/orders/${id}`).then(res => res.data);

export { postOrder, getOrderById };
