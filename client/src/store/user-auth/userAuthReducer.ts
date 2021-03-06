import {
  IUserActions,
  IUserState,
  USER_CHANGE_FAIL,
  USER_CHANGE_REQUEST,
  USER_LOGIN_REGISTER_SUCCESS,
  USER_LOGOUT,
  USER_UPDATE,
} from './userAuthTypes';

const initialState: IUserState = {
  user: undefined,
  loading: false,
  error: false,
  updateSuccess: false,
};

const userAuthReducer = (state = initialState, action: IUserActions) => {
  switch (action.type) {
    case USER_CHANGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_LOGIN_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USER_CHANGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: undefined,
        error: false,
        loading: false,
      };
    case USER_UPDATE:
      return {
        ...state,
        user: action.payload,
        error: false,
        loading: false,
        updateSuccess: true,
      };
    default:
      return state;
  }
};

export default userAuthReducer;
