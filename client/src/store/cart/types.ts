import {ICartItem} from "../../@types";

// action types
export const CART_ADD_ITEM = 'CART_ADD_ITEM'
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM'

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

export type ICartActionTypes = IAddToCart | IRemoveToCart
