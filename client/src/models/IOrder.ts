import { IUser, IShippingLocation, IProduct, IPaymentResult } from '../@types';

export default interface IOrder {
  _id?: string;
  user?: IUser['_id'] | IUser;
  orderItems: { quantity: number; product: IProduct['_id'] }[];
  shippingLocation: IShippingLocation['_id'];
  paymentMethod: string | undefined;
  paymentResult?: IPaymentResult;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  itemsPrice: number;
  isPaid?: boolean;
  paidAt?: Date;
  isDelivered?: boolean;
  deliveredAt?: Date;
  createdAt: Date;
}
