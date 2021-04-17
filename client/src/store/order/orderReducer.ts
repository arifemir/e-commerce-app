import { CLEAR_ORDER, IOrderActions, IOrderState, ORDER_DETAIL_SUCCESS, ORDER_FAIL, ORDER_REQUEST, ORDER_SUCCESS } from './orderTypes';

const initialState: IOrderState = {
  order: undefined,
  orderDetails: undefined,
  loading: false,
  error: false,
  success: false,
};

const orderReducer = (state = initialState, action: IOrderActions) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        orderDetails: action.payload,
      };
    case ORDER_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case CLEAR_ORDER:
      return {
        order: undefined,
        loading: false,
        error: false,
        success: false,
      };
    default:
      return state;
  }
};

export default orderReducer;
