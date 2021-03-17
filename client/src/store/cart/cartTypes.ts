import { ICartItem, IShippingLocation } from '../../@types';

// action types
const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const GET_STORED_CART = 'GET_STORED_CART';
const CART_ADD_SHIPPING_ADDRESS = 'CART_ADD_SHIPPING_ADDRESS';

// state
interface ICartState {
  cartItems: ICartItem[];
  shippingLocations: IShippingLocation[];
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
  payload: ICartState
}

interface IAddShippingAddress {
  type: typeof CART_ADD_SHIPPING_ADDRESS;
  payload: IShippingLocation;
}

type ICartActions = IAddToCart | IRemoveToCart | IGetStoredCart | IAddShippingAddress;

export { CART_ADD_ITEM, CART_REMOVE_ITEM, GET_STORED_CART,CART_ADD_SHIPPING_ADDRESS };

export type { ICartState, ICartActions };
