interface IProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

interface ICartItem extends IProduct {
  quantity: number;
}

interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
  token?: string;
}

interface IUserDetail extends IUser {}

interface IShippingLocation {
  _id?: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface IOrder {
  _id?: string;
  user?: IUser['_id'];
  orderItems: { quantity: number; product: IProduct['_id'] }[];
  shippingLocation: IShippingLocation['_id'];
  paymentMethod: string | undefined;
  paymentResult?: { id: string; status: string; update_time: string; email_address: string };
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  itemsPrice: number;
  isPaid?: boolean;
  paidAt?: Date;
  isDelivered?: boolean;
  deliveredAt?: Date;
}

export interface IOrderDetails extends IOrder {
  user: IUser;
  shippingLocation: IShippingLocation;
  orderItems: { quantity: number; product: IProduct }[];
}

export type { IProduct, ICartItem, IUser, IUserDetail, IShippingLocation, IOrder, IOrderDetails };
