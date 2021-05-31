import { Dispatch } from 'react';
import {
  CLEAR_ORDER,
  IOrderActions,
  ORDER_ALL_SUCCESS,
  ORDER_DETAIL_SUCCESS,
  ORDER_FAIL,
  ORDER_RESET,
  ORDER_PAY_SUCCESS,
  ORDER_REQUEST,
  ORDER_SUCCESS,
} from './orderTypes';
import { postOrder, getOrderById, paymentOrder, allOrders } from '../../services/orderService';
import { IOrder, IPaymentResult } from '../../@types';

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

const payOrder = (id: string, paymentResult: IPaymentResult) => async (dispatch: Dispatch<IOrderActions>) => {
  try {
    dispatch({ type: ORDER_REQUEST });
    const order = await paymentOrder(id, paymentResult);
    dispatch({ type: ORDER_PAY_SUCCESS, payload: order });
  } catch (e) {
    dispatch({ type: ORDER_FAIL, payload: e.response ? e.response.data : e });
  }
};

const getAllOrders = () => async (dispatch: Dispatch<IOrderActions>) => {
  try {
    dispatch({ type: ORDER_REQUEST });
    const orders = await allOrders();
    dispatch({ type: ORDER_ALL_SUCCESS, payload: orders });
  } catch (e) {
    dispatch({ type: ORDER_FAIL, payload: e.response ? e.response.data : e });
  }
};

const resetOrder = () => ({type: ORDER_RESET})

export { createOrder, getOrder, clearCreateOrder, payOrder, getAllOrders, resetOrder };
