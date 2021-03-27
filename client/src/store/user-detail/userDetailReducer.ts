import { IUserDetailState, IUserDetailActions, USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS, USER_DETAIL_FAIL } from './userDetailTypes';

const initialState: IUserDetailState = {
  userDetail: undefined,
  loading: false,
  error: false,
};

const userDetailReducer = (state = initialState, action: IUserDetailActions) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DETAIL_SUCCESS:
      return {
        ...state,
        userDetail: action.payload,
        loading: false,
      };
    case USER_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userDetailReducer;
