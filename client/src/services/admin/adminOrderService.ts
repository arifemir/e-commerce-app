import axios from 'axios';
import { IOrder } from '../../@types';

const getAllOrder = (): Promise<IOrder[]> => axios.get('api/orders/allorder').then(res => res.data);

const updateOrderToDelivered = (id: string): Promise<IOrder> => axios.put(`api/orders/${id}/deliver`).then(res => res.data);

export {
  getAllOrder,
  updateOrderToDelivered
}