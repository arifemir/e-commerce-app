import {
  CLEAR_ORDER,
  IOrderActions,
  IOrderState,
  ORDER_ALL_SUCCESS,
  ORDER_DETAIL_SUCCESS,
  ORDER_FAIL,
  ORDER_RESET,
  ORDER_PAY_SUCCESS,
  ORDER_REQUEST,
  ORDER_SUCCESS,
} from './orderTypes';

const initialState: IOrderState = {
  order: undefined,
  orderDetails: undefined,
  orders: [],
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
        ...state,
        order: undefined,
        loading: false,
        error: false,
        success: false,
      };
    case ORDER_PAY_SUCCESS:
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          isPaid: action.payload.isPaid,
          paidAt: action.payload.paidAt,
        },
        loading: false,
        success: true,
      };
    case ORDER_RESET:
      return {
        ...state,
        order: undefined,
        orderDetails: undefined,
        orders: [],
      };
    case ORDER_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
