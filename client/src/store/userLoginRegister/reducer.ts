import {IUserActionTypes, IUserState, USER_LOGIN_REGISTER_FAIL, USER_LOGIN_REGISTER_REQUEST, USER_LOGIN_REGISTER_SUCCESS, USER_LOGOUT} from "./types";

const initialState: IUserState = {
  user: null,
  loading: false,
  error: false
}

const UserLoginRegisterReducer = (state = initialState, action: IUserActionTypes) => {
  switch (action.type) {
    case USER_LOGIN_REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case USER_LOGIN_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case USER_LOGIN_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

export default UserLoginRegisterReducer;
