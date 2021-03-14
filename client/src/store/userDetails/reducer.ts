import { IUserDetailsState, IUserDetailsActionTypes, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL } from "./types"

const initialState: IUserDetailsState = {
  userDetails: null,
  loading: false,
  error: false,
}

const userDetailsReducer = (state = initialState, action: IUserDetailsActionTypes) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
        loading: false,
      }
    case USER_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default userDetailsReducer