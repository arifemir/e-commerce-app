import axios from 'axios'
import {Dispatch} from "react";
import {CART_ADD_ITEM, ICartActionTypes} from "./types";
import {IRootState} from "../index";


const addToCart = (id: string, quantity: number) => async (dispatch: Dispatch<ICartActionTypes>, getState: () => IRootState) => {
  const {data} = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      ...data,
      quantity
    }
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export {
  addToCart
}
