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

export type { IProduct, ICartItem, IUser, IUserDetail, IShippingLocation };
