import { IOrder } from '../../@types';

const ORDER_CREATE_REQUEST = 'ORDER_CREATE_REQUEST';
const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';
const ORDER_CREATE_FAIL = 'ORDER_CREATE_FAIL';

interface IOrderState {
  order: IOrder | undefined;
  loading: boolean;
  error: any;
  success: boolean;
}

interface ILoadingOrderAction {
  type: typeof ORDER_CREATE_REQUEST;
}

interface IErrorOrderAction {
  type: typeof ORDER_CREATE_FAIL;
  payload: any;
}

interface ICreateOrderAction {
  type: typeof ORDER_CREATE_SUCCESS;
  payload: IOrder;
}

type IOrderActions = ILoadingOrderAction | IErrorOrderAction | ICreateOrderAction;

export { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL };
export type { IOrderState, IOrderActions };
