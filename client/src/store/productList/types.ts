import {IProduct} from "../../@types";

//action types
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'

//state
export interface IProductListState {
  products: IProduct[],
  loading: boolean,
  error: any
}

//actions
interface IProductListRequestAction {
  type: typeof PRODUCT_LIST_REQUEST,
  payload?: boolean
}

interface IProductListRequestSuccessAction {
  type: typeof PRODUCT_LIST_SUCCESS,
  payload: IProduct[]
}

interface IProductListRequestFailedAction {
  type: typeof PRODUCT_LIST_FAIL,
  payload: any
}

export type IProductsActionTypes = IProductListRequestAction | IProductListRequestSuccessAction | IProductListRequestFailedAction
