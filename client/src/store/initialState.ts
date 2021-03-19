import { ICartItem, IUser } from '../@types';
import { getLocalStorage, getLocalStorageForUser } from '../helpers/giveLocalStorage';


const initialState = {
  cart: {
    cartItems: getLocalStorage('cartItems')
  },
  userAuth: {
    user: getLocalStorageForUser('user'),
    loading: false,
    error: null,
    updateSuccess: false,
  }
};

export default initialState;