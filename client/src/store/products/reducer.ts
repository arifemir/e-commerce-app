import {productsActionTypes, IProductListState, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "./types";

const initialState: IProductListState = {
  products: [],
  loading: false,
  error: false
}

const productListReducer = (state = initialState, action: productsActionTypes) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload
      }
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default productListReducer;
