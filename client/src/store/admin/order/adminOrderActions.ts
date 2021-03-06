import { Dispatch } from "redux";
import { getAllOrder, updateOrderToDelivered } from "../../../services/admin/adminOrderService";
import {
  ADMIN_ORDER_CHANGE,
  ADMIN_ORDER_FAIL,
  GET_ALL_ORDER_SUCCESS,
  IAdminOrderActions,
  ORDER_DELIVER_SUCCESS,
} from './adminOrderTypes';

const getOrders = () => async (dispatch: Dispatch<IAdminOrderActions>) => {
  dispatch({type: ADMIN_ORDER_CHANGE})
  try {
    const orders = await getAllOrder();
    dispatch({type: GET_ALL_ORDER_SUCCESS, payload: orders})
  } catch (e) {
    dispatch({ type: ADMIN_ORDER_FAIL, payload: e.response ? e.response.data : e });
  }
}

const orderDelivered = (id: string) => async (dispatch: Dispatch<IAdminOrderActions>) => {
  dispatch({type: ADMIN_ORDER_CHANGE})
  try {
    const order = await updateOrderToDelivered(id);
    dispatch({type: ORDER_DELIVER_SUCCESS})
  } catch (e) {
    dispatch({ type: ADMIN_ORDER_FAIL, payload: e.response ? e.response.data : e });
  }
}
export { getOrders, orderDelivered }
