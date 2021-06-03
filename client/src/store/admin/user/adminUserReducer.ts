import {
  ADMIN_USER_FAIL,
  ADMIN_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
  IAdminUserActions,
  IAdminUserState,
  REMOVE_USER_SUCCESS,
  RESET_ALL_USER,
} from './adminUserTypes';

const initialState: IAdminUserState = {
  users: [],
  loading: false,
  error: false,
  user: undefined,
};

const adminUserReducer = (state = initialState, action: IAdminUserActions) => {
  switch (action.type) {
    case ADMIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case ADMIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_ALL_USER:
      return {
        ...state,
        loading: false,
        error: false,
        users: [],
      }
    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      }
    default:
      return state;
  }
};

export default adminUserReducer;
