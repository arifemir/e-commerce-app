import {ICartItem} from "../../@types";

// action types
export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'
export const GET_STORED_CART = 'GET_STORED_CART'

// state
export interface ICartState {
  cartItems: ICartItem[]
}

// actions
interface IAddToCart {
  type: typeof CART_ADD_ITEM,
  payload: ICartItem
}

interface IRemoveToCart {
  type: typeof CART_REMOVE_ITEM,
  payload: string
}

interface IGetStoredCart {
  type: typeof GET_STORED_CART,
  payload: ICartItem[]
}

export type ICartActionTypes = IAddToCart | IRemoveToCart | IGetStoredCart
