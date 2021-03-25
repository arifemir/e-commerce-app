import { ICartItem, IUser } from '../@types';
import { loadStorage } from './helper/loadStorage';
import { setAuthHeader } from './helper/setAuthHeader';

let cartItems: ICartItem[] = [];
let user: IUser | null = null;

cartItems = loadStorage<ICartItem[]>('cartItems') || [];
user = loadStorage<IUser>('user');

setAuthHeader(user?.token);

const initialState = {
  cart: {
    cartItems,
  },
  userAuth: {
    user,
    loading: false,
    error: null,
    updateSuccess: false,
  },
};

export default initialState;
