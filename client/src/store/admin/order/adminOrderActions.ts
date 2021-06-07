import { Dispatch } from "redux";
import { allOrders } from "../../../services/orderService";
import { ADMIN_ORDER_CHANGE, ADMIN_ORDER_FAIL, GET_ALL_ORDER_SUCCESS, IAdminOrderActions } from "./adminOrderTypes";

const getOrders = () => async (dispatch: Dispatch<IAdminOrderActions>) => {
  dispatch({type: ADMIN_ORDER_CHANGE})
  try {
    const orders = await allOrders();
    dispatch({type: GET_ALL_ORDER_SUCCESS, payload: orders})
  } catch (e) {
    dispatch({ type: ADMIN_ORDER_FAIL, payload: e.response ? e.response.data : e });
  }
}

export { getOrders }