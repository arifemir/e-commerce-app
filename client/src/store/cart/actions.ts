import {getProduct} from "../../services/product";

//types
import {CART_ADD_ITEM, CART_REMOVE_ITEM, GET_STORED_CART, ICartActionTypes} from "./types";
import {Dispatch} from "react";
import {IRootState} from "../index";
import { ICartItem } from "../../@types";

const addToCart = (id: string, quantity: number) => async (dispatch: Dispatch<ICartActionTypes>, getState: () => IRootState) => {
  const data = await getProduct(id)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      ...data,
      quantity
    }
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

const removeToCart = (id: string) => async (dispatch: Dispatch<ICartActionTypes>, getState: () => IRootState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

const getStoredCartData = () => async (dispatch: Dispatch<ICartActionTypes>) => {
  const storedCartItems = localStorage.getItem('cartItems')

  if(storedCartItems === null) return

  const cartItems: ICartItem[] = await JSON.parse(storedCartItems)
  dispatch({type: GET_STORED_CART, payload: cartItems})
}

export {
  addToCart,
  removeToCart,
  getStoredCartData,
}
