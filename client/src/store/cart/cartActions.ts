import { getProduct } from '../../services/productService';

//types
import { CART_ADD_ITEM, CART_REMOVE_ITEM, ICartActions, ICartState } from './cartTypes';
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

export { addToCart, removeToCart };
