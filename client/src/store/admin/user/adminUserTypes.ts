import { IUser } from "../../../@types";

// action types
const GET_ALL_USER_REQUEST = 'GET_ALL_USER_REQUEST';
const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';
const GET_ALL_USER_FAIL = 'GET_ALL_USER_FAIL';
const RESET_ALL_USER = 'RESET_ALL_USER';

// state
interface IAdminUserState {
  users: IUser[];
  loading: boolean;
  error: any;
}

// actions
interface IAdminGetAllUserRequest {
  type: typeof GET_ALL_USER_REQUEST;
}

interface IAdminGetAllUserSuccess {
  type: typeof GET_ALL_USER_SUCCESS;
  payload: IUser[];
}

interface IAdminGetAllUserFail {
  type: typeof GET_ALL_USER_FAIL;
  payload: any;
}

interface IResetAllUser {
  type: typeof RESET_ALL_USER;
}

type IAdminUserActions = IAdminGetAllUserRequest | IAdminGetAllUserSuccess | IAdminGetAllUserFail | IResetAllUser;

export { GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL, RESET_ALL_USER }

export type {
  IAdminUserState,
  IAdminUserActions
}
