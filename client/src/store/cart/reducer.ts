import {CART_ADD_ITEM, CART_REMOVE_ITEM, ICartActionTypes, ICartState} from "./types";


const initialState: ICartState = {
  cartItems: []
}

const cartReducer = (state = initialState, action: ICartActionTypes) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find(x => x._id === item._id)
      return existItem ? {
        ...state,
        cartItems: state.cartItems.map(x => x._id === existItem._id ? item : x)
      } : {
        ...state,
        cartItems: [...state.cartItems, item]
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== action.payload)
      }
    default:
      return state
  }
}

export default cartReducer;
