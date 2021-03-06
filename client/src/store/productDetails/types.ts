import {IProduct} from "../../@types";

//action types
export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST'
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'

//state
export interface IProductDetailsState {
  product: IProduct | null,
  loading: boolean,
  error: any
}

//actions
interface IProductDetailsRequestAction {
  type: typeof PRODUCT_DETAILS_REQUEST,
  payload?: boolean
}

interface IProductDetailsRequestSuccessAction {
  type: typeof PRODUCT_DETAILS_SUCCESS,
  payload: IProduct
}

interface IProductDetailsRequestFailedAction {
  type: typeof PRODUCT_DETAILS_FAIL,
  payload: any
}

export type IProductActionTypes = IProductDetailsRequestAction | IProductDetailsRequestSuccessAction | IProductDetailsRequestFailedAction
