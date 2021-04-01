import { IOrderActions, IOrderState, ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from './orderTypes';

const initialState: IOrderState = {
  order: undefined,
  loading: false,
  error: false,
  success: false,
};

const orderReducer = (state = initialState, action: IOrderActions) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
