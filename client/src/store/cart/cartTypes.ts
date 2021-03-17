import { ICartItem } from '../../@types';

// action types
const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const GET_STORED_CART = 'GET_STORED_CART';

// state
interface ICartState {
  cartItems: ICartItem[];
}

// actions
interface IAddToCart {
  type: typeof CART_ADD_ITEM;
  payload: ICartItem;
}

interface IRemoveToCart {
  type: typeof CART_REMOVE_ITEM;
  payload: string;
}

interface IGetStoredCart {
  type: typeof GET_STORED_CART;
  payload: ICartItem[];
}

type ICartActions = IAddToCart | IRemoveToCart | IGetStoredCart;

export { CART_ADD_ITEM, CART_REMOVE_ITEM, GET_STORED_CART };

export type { ICartState, ICartActions };
