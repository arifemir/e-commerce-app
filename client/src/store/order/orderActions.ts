import { Dispatch } from 'react';
import { CLEAR_ORDER, IOrderActions, ORDER_DETAIL_SUCCESS, ORDER_FAIL, ORDER_REQUEST, ORDER_SUCCESS } from './orderTypes';
import { postOrder, getOrderById } from '../../services/orderService';
import { IOrder, IOrderDetails } from '../../@types';

const createOrder = (order: IOrder) => async (dispatch: Dispatch<IOrderActions>) => {
  try {
    dispatch({ type: ORDER_REQUEST });
    const createdOrder = await postOrder(order);
    dispatch({ type: ORDER_SUCCESS, payload: createdOrder });
  } catch (e) {
    dispatch({ type: ORDER_FAIL, payload: e.response ? e.response.data : e });
  }
};

const clearCreateOrder = () => ({ type: CLEAR_ORDER });

const getOrder = (id: string) => async (dispatch: Dispatch<IOrderActions>) => {
  try {
    dispatch({ type: ORDER_REQUEST });
    const order = await getOrderById(id);
    dispatch({ type: ORDER_DETAIL_SUCCESS, payload: order });
  } catch (e) {
    dispatch({ type: ORDER_FAIL, payload: e.response ? e.response.data : e });
  }
};

export { createOrder, getOrder, clearCreateOrder };
