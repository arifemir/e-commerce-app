import {product} from "../../@types";

//action types
export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST'
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS'
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL'

//state
export interface IProductDetailsState {
  product: product | null,
  loading: boolean,
  error: any
}

//actions
interface productDetailsRequestAction {
  type: typeof PRODUCT_DETAILS_REQUEST,
  payload?: boolean
}

interface productDetailsRequestSuccessAction {
  type: typeof PRODUCT_DETAILS_SUCCESS,
  payload: product
}

interface productDetailsRequestFailedAction {
  type: typeof PRODUCT_DETAILS_FAIL,
  payload: any
}

export type productActionTypes = productDetailsRequestAction | productDetailsRequestSuccessAction | productDetailsRequestFailedAction
