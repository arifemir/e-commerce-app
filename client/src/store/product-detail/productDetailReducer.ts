import {
  IProductDetailActions,
  IProductDetailState,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from './productDetailTypes';

const initialState: IProductDetailState = {
  product: undefined,
  loading: false,
  error: false,
  createReviewSuccess: false,
  reviews: [],
};

const productDetailReducer = (state = initialState, action: IProductDetailActions) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        createReviewSuccess: false,
      };
    case PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        createReviewSuccess: false,
      };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        createReviewSuccess: true,
      }
    default:
      return state;
  }
};

export default productDetailReducer;
