import { IUser } from '../../../@types';

// action types
const ADMIN_USER_REQUEST = 'GET_ALL_USER_REQUEST';
const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';
const ADMIN_USER_FAIL = 'GET_ALL_USER_FAIL';
const RESET_ALL_USER = 'RESET_ALL_USER';
const REMOVE_USER_SUCCESS = 'REMOVE_USER_SUCCESS';
const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';

// state
interface IAdminUserState {
  users: IUser[];
  loading: boolean;
  error: any;
  user: IUser | undefined;
}

// actions
interface IAdminGetAllUserRequest {
  type: typeof ADMIN_USER_REQUEST;
}

interface IAdminGetAllUserSuccess {
  type: typeof GET_ALL_USER_SUCCESS;
  payload: IUser[];
}

interface IAdminGetAllUserFail {
  type: typeof ADMIN_USER_FAIL;
  payload: any;
}

interface IResetAllUser {
  type: typeof RESET_ALL_USER;
}

interface IRemoveUser {
  type: typeof REMOVE_USER_SUCCESS;
  payload: IUser[];
}

interface IGetUserDetailsSuccess {
  type: typeof GET_USER_DETAILS_SUCCESS;
  payload: IUser;
}

interface IUserUpdateSuccess {
  type: typeof USER_UPDATE_SUCCESS;
  payload: IUser;
}
type IAdminUserActions =
  | IAdminGetAllUserRequest
  | IAdminGetAllUserSuccess
  | IAdminGetAllUserFail
  | IResetAllUser
  | IRemoveUser
  | IGetUserDetailsSuccess
  | IUserUpdateSuccess;

export {
  ADMIN_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  ADMIN_USER_FAIL,
  RESET_ALL_USER,
  REMOVE_USER_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
  USER_UPDATE_SUCCESS,
};

export type { IAdminUserState, IAdminUserActions };
