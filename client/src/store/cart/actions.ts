import {getProduct} from "../../services/product";

//types
import {CART_ADD_ITEM, CART_REMOVE_ITEM, ICartActionTypes} from "./types";
import {Dispatch} from "react";
import {IRootState} from "../index";
import {ICartItem} from "../../@types";


const addToCart = (id: ICartItem['_id'], quantity: ICartItem['quantity']) => async (dispatch: Dispatch<ICartActionTypes>, getState: () => IRootState) => {
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

const removeToCart = (id: ICartItem['_id']) => async (dispatch: Dispatch<ICartActionTypes>, getState: () => IRootState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems.filter(x => x._id !== id)));
}

export {
  addToCart
}
