import { IProduct, IReview } from '../../@types';
//action types
const PRODUCT_DETAIL_REQUEST = 'PRODUCT_DETAIL_REQUEST';
const PRODUCT_DETAIL_SUCCESS = 'PRODUCT_DETAIL_SUCCESS';
const PRODUCT_DETAIL_FAIL = 'PRODUCT_DETAIL_FAIL';
const PRODUCT_CREATE_REVIEW_SUCCESS = 'PRODUCT_CREATE_REVIEW_SUCCESS';
//state
interface IProductDetailState {
  product: IProduct | undefined;
  loading: boolean;
  error: any;
  reviews: IReview[];
  createReviewSuccess: boolean;
}

//actions
interface IProductDetailRequestAction {
  type: typeof PRODUCT_DETAIL_REQUEST;
  payload?: boolean;
}

interface IProductDetailRequestSuccessAction {
  type: typeof PRODUCT_DETAIL_SUCCESS;
  payload: IProduct;
}

interface IProductDetailRequestFailedAction {
  type: typeof PRODUCT_DETAIL_FAIL;
  payload: any;
}

interface IProductCreateReviewSuccess {
  type: typeof PRODUCT_CREATE_REVIEW_SUCCESS;
}

type IProductDetailActions = IProductDetailRequestAction | IProductDetailRequestSuccessAction | IProductDetailRequestFailedAction | IProductCreateReviewSuccess;

export { PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_CREATE_REVIEW_SUCCESS };

export type { IProductDetailState, IProductDetailActions };
