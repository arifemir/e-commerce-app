import { getProduct } from '../../services/productService';

//types
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ADD_SHIPPING_ADDRESS, GET_STORED_CART, ICartActions, ICartState } from './cartTypes';
import { Dispatch } from 'redux';
import { IRootState } from '../store';
import { ICartItem, IShippingLocation } from '../../@types';

const addToCart = (id: string, quantity: number) => async (dispatch: Dispatch<ICartActions>, getState: () => IRootState) => {
  const data = await getProduct(id);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      ...data,
      quantity,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

const removeToCart = (id: string) => async (dispatch: Dispatch<ICartActions>, getState: () => IRootState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

const getStoredCartData = () => async (dispatch: Dispatch<ICartActions>) => {
  const storedCartItems = localStorage.getItem('cartItems');
  const storedShipping = localStorage.getItem('shipping');

  let cartItems: ICartItem[] = [];
  let shippingLocations: IShippingLocation[] = [];

  if (storedCartItems) {
    cartItems = await JSON.parse(storedCartItems);
  };

  if(storedShipping) {
    shippingLocations = await JSON.parse(storedShipping);
  };

  const payload: ICartState = {
    cartItems, shippingLocations
  }

  dispatch({ type: GET_STORED_CART, payload });
};

const addShippingAddress = (data: IShippingLocation) => async (dispatch: Dispatch<ICartActions>, getState: () => IRootState) => {
  dispatch({
    type: CART_ADD_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shipping', JSON.stringify(getState().cart.shippingLocations))
}

export { addToCart, removeToCart, getStoredCartData, addShippingAddress };
