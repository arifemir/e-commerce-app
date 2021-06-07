import { IOrder } from "../../../@types";

//action types
const ADMIN_ORDER_CHANGE = 'ADMIN_ORDER_CHANGE';
const ADMIN_ORDER_FAIL = 'ADMIN_ORDER_FAIL';
const GET_ALL_ORDER_SUCCESS = 'GET_ALL_ORDER_SUCCESS';
const ORDER_DELIVER_SUCCESS = 'ORDER_DELIVER_SUCCESS';

//state
interface IAdminOrderState {
  loading: boolean;
  error: any;
  orders: IOrder[];
  deliverChange: boolean;
}

//actions
interface IAdminOrderChange {
  type: typeof ADMIN_ORDER_CHANGE;
}

interface IAdminOrderFail {
  type: typeof ADMIN_ORDER_FAIL;
  payload: any;
}

interface IGetAllOrderSuccess {
  type: typeof GET_ALL_ORDER_SUCCESS;
  payload: IOrder[];
}

interface IAdminOrderDeliverSuccess {
  type: typeof ORDER_DELIVER_SUCCESS;
}

export { ADMIN_ORDER_CHANGE, ADMIN_ORDER_FAIL, GET_ALL_ORDER_SUCCESS, ORDER_DELIVER_SUCCESS }

type IAdminOrderActions = IAdminOrderChange | IAdminOrderFail | IGetAllOrderSuccess | IAdminOrderDeliverSuccess;

export type { IAdminOrderState, IAdminOrderActions }
