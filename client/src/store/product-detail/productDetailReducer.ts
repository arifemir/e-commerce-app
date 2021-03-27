import {
  IProductDetailActions,
  IProductDetailState,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_FAIL,
} from './productDetailTypes';

const initialState: IProductDetailState = {
  product: undefined,
  loading: false,
  error: false,
};

const productDetailReducer = (state = initialState, action: IProductDetailActions) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
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
      };
    default:
      return state;
  }
};

export default productDetailReducer;
