import { IOrder, IOrderDetails } from '../../@types';

const ORDER_REQUEST = 'ORDER_REQUEST';
const ORDER_SUCCESS = 'ORDER_SUCCESS';
const ORDER_FAIL = 'ORDER_FAIL';
const CLEAR_ORDER = 'CLEAR_ORDER';
const ORDER_DETAIL_SUCCESS = 'ORDER_DETAIL_SUCCESS';
const ORDER_PAY_SUCCESS = 'ORDER_PAY_SUCCESS';
const ORDER_RESET = 'ORDER_RESET';
const ORDER_ALL_SUCCESS = 'ORDER_ALL_SUCCESS';

interface IOrderState {
  order: IOrder | undefined;
  orderDetails: IOrderDetails | undefined;
  orders: IOrder[];
  loading: boolean;
  error: any;
  success: boolean;
}

interface ILoadingOrderAction {
  type: typeof ORDER_REQUEST;
}

interface IErrorOrderAction {
  type: typeof ORDER_FAIL;
  payload: any;
}

interface ICreateOrderAction {
  type: typeof ORDER_SUCCESS;
  payload: IOrder;
}

interface IGetOrderDetailsAction {
  type: typeof ORDER_DETAIL_SUCCESS;
  payload: IOrderDetails;
}

interface IClearOrderAction {
  type: typeof CLEAR_ORDER;
}

interface IOrderPaymentAction {
  type: typeof ORDER_PAY_SUCCESS;
  payload: IOrder;
}

interface IOrderPaymentReset {
  type: typeof ORDER_RESET;
}

interface IGetAllOrdersAction {
  type: typeof ORDER_ALL_SUCCESS;
  payload: IOrder[];
}

type IOrderActions =
  | ILoadingOrderAction
  | IErrorOrderAction
  | ICreateOrderAction
  | IClearOrderAction
  | IGetOrderDetailsAction
  | IOrderPaymentAction
  | IOrderPaymentReset
  | IGetAllOrdersAction;

export { ORDER_REQUEST, ORDER_FAIL, ORDER_SUCCESS, CLEAR_ORDER, ORDER_DETAIL_SUCCESS, ORDER_PAY_SUCCESS, ORDER_RESET, ORDER_ALL_SUCCESS };
export type { IOrderState, IOrderActions };
