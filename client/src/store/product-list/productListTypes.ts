import { IProduct } from '../../@types';

//action types
const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL';

//state
interface IProductListState {
  products: IProduct[];
  loading: boolean;
  error: any;
}

//actions
interface IProductListRequestAction {
  type: typeof PRODUCT_LIST_REQUEST;
  payload?: boolean;
}

interface IProductListRequestSuccessAction {
  type: typeof PRODUCT_LIST_SUCCESS;
  payload: IProduct[];
}

interface IProductListRequestFailedAction {
  type: typeof PRODUCT_LIST_FAIL;
  payload: any;
}

type IProductListActions = IProductListRequestAction | IProductListRequestSuccessAction | IProductListRequestFailedAction;

export { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL };

export type { IProductListState, IProductListActions };
