import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ADD_SHIPPING_ADDRESS, GET_STORED_CART, ICartActions, ICartState } from './cartTypes';

const initialState: ICartState = {
  cartItems: [],
  shippingLocations: [], 
};

const cartReducer = (state = initialState, action: ICartActions) => {
  switch (action.type) {
    case CART_ADD_ITEM: 
      const cartItem = action.payload;
      const existCartItem = state.cartItems.find(x => x._id === cartItem._id);
      return existCartItem
        ? {
            ...state,
            cartItems: state.cartItems.map(x => (x._id === existCartItem._id ? cartItem : x)),
          }
        : {
            ...state,
            cartItems: [...state.cartItems, cartItem],
          };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== action.payload),
      };
    case GET_STORED_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        shippingLocations: action.payload.shippingLocations,
      };
    case CART_ADD_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingLocations: [...state.shippingLocations, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
