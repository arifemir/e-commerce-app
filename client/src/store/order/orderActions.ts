import { Dispatch } from 'react';
import { IOrderActions, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from './orderTypes';
import { postOrder } from '../../services/orderService';
import { IOrder } from '../../@types';

const createOrder = (order: IOrder) => async (dispatch: Dispatch<IOrderActions>) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST });
    const createdOrder = await postOrder(order);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: createdOrder });
  } catch (e) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: e.response ? e.response.data : e });
  }
};

export { createOrder };
