import {IProduct} from "../../@types";

//action types
const PRODUCT_DETAIL_REQUEST = 'PRODUCT_DETAIL_REQUEST'
const PRODUCT_DETAIL_SUCCESS = 'PRODUCT_DETAIL_SUCCESS'
const PRODUCT_DETAIL_FAIL = 'PRODUCT_DETAIL_FAIL'

//state
interface IProductDetailState {
  product: IProduct | null,
  loading: boolean,
  error: any
}

//actions
interface IProductDetailRequestAction {
  type: typeof PRODUCT_DETAIL_REQUEST,
  payload?: boolean
}

interface IProductDetailRequestSuccessAction {
  type: typeof PRODUCT_DETAIL_SUCCESS,
  payload: IProduct
}

interface IProductDetailRequestFailedAction {
  type: typeof PRODUCT_DETAIL_FAIL,
  payload: any
}

type IProductDetailActions = IProductDetailRequestAction | IProductDetailRequestSuccessAction | IProductDetailRequestFailedAction

export {
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
}

export type {
  IProductDetailState,
  IProductDetailActions
}
