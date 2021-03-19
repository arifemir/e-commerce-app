import { ICartItem } from '../../@types';

// action types
const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

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

type ICartActions = IAddToCart | IRemoveToCart;

export { CART_ADD_ITEM, CART_REMOVE_ITEM };

export type { ICartState, ICartActions };
