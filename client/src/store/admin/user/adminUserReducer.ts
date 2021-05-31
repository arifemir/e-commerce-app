import { GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, IAdminUserActions, IAdminUserState } from './adminUserTypes';

const initialState: IAdminUserState = {
  users: [],
  loading: false,
  error: false,
};

const adminUserReducer = (state = initialState, action: IAdminUserActions) => {
  switch (action.type) {
    case GET_ALL_USER_REQUEST:
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
    case GET_ALL_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminUserReducer;
