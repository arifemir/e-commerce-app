import axios from 'axios';
import { IOrder, IOrderDetails, IPaymentResult } from '../@types';

const postOrder = (order: IOrder): Promise<IOrder> => axios.post('/api/orders', order).then(res => res.data);

const getOrderById = (id: string): Promise<IOrderDetails> => axios.get(`/api/orders/${id}`).then(res => res.data);

const paymentOrder = (id: string, paymentResult: IPaymentResult): Promise<IOrder> =>
  axios.put(`/api/orders/${id}/pay`, paymentResult).then(res => res.data);

export { postOrder, getOrderById, paymentOrder };
