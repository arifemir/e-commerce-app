import {
  ADMIN_ORDER_CHANGE,
  ADMIN_ORDER_FAIL,
  GET_ALL_ORDER_SUCCESS,
  IAdminOrderActions,
  IAdminOrderState,
  ORDER_DELIVER_SUCCESS,
} from './adminOrderTypes';

const initialState: IAdminOrderState = {
  orders: [],
  error: false,
  loading: false,
  deliverChange: false,
};

const adminOrderReducer = (state = initialState, action: IAdminOrderActions) => {
  switch (action.type) {
    case ADMIN_ORDER_CHANGE:
      return {
        ...state,
        loading: true,
        deliverChange: false,
      };
    case ADMIN_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        deliverChange: false,
        error: action.payload,
      };
    case GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload
      };
    case ORDER_DELIVER_SUCCESS:
      return {
        ...state,
        loading: false,
        deliverChange: true,
      }
    default:
      return state;
  }
};

export default adminOrderReducer;
