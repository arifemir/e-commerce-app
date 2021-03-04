import {product} from "../../@types";

//action types
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'

//state
export interface IProductListState {
  products: product[],
  loading: boolean,
  error: any
}

//actions
interface productListRequestAction {
  type: typeof PRODUCT_LIST_REQUEST,
  payload?: boolean
}

interface productListRequestSuccessAction {
  type: typeof PRODUCT_LIST_SUCCESS,
  payload: product[]
}

interface productListRequestFailedAction {
  type: typeof PRODUCT_LIST_FAIL,
  payload: any
}

export type productsActionTypes = productListRequestAction | productListRequestSuccessAction | productListRequestFailedAction
