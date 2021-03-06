import {getProduct} from "../../services/product";

//types
import {CART_ADD_ITEM, CART_REMOVE_ITEM, ICartActionTypes} from "./types";
import {Dispatch} from "react";
import {IRootState} from "../index";

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

export {
  addToCart,
  removeToCart,
}
