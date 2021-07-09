import { IProductTopActions, IProductTopState, PRODUCT_TOP_FAILED, PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS } from './productTopTypes';

const initialState: IProductTopState = {
  products: [],
  loading: false,
  error: false,
};

const productTopReducer = (state = initialState, action: IProductTopActions) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_TOP_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case PRODUCT_TOP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productTopReducer;
