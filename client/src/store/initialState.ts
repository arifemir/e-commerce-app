import { ICartItem, IUser } from '../@types';
import { loadStorage } from './helper/loadStorage';
import { setAuthHeader } from './helper/setAuthHeader';
import { IShippingState } from './shipping/shippingTypes';

let cartItems = loadStorage<ICartItem[]>('cartItems') || [];
let user = loadStorage<IUser>('user');
let shipping = loadStorage<IShippingState>('shipping');

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
  shipping,
};

export default initialState;
