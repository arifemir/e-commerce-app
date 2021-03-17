export interface IProduct {
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

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
  token?: string;
}

export interface IUserDetail extends IUser {}
