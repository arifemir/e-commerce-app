import { IUserUpdateState, IUserUpdateActionTypes, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "./types";

const initialState: IUserUpdateState = {
  user: null,
  loading: false,
  error: false,
  success: false,
}

const userUpdateReducer = (state = initialState, action: IUserUpdateActionTypes) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        success: true
      }
    case USER_UPDATE_FAIL:
      return {
        ...state,
        error: action.payload
      }
    // case USER_UPDATE_RESET:
    //   return {
    //     ...state
    //   }
    default:
      return state
  }
}

export default userUpdateReducer