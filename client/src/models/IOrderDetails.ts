import {IUser, IShippingLocation, IOrder, ICartItem, IProduct} from '../@types';

export default interface IOrderDetails extends Omit<IOrder, 'user' | 'orderItems' | 'shippingLocation'> {
  user: {
    name: IUser["name"],
    email: IUser["email"]
  };
  shippingLocation: IShippingLocation;
  orderItems: {
    quantity: number,
    product: IProduct
  }[];
}