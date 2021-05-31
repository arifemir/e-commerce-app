import { IUser } from "../../../@types";

// action types
const GET_ALL_USER_REQUEST = 'GET_ALL_USER_REQUEST';
const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS';
const GET_ALL_USER_FAIL = 'GET_ALL_USER_FAIL';

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

type IAdminUserActions = IAdminGetAllUserRequest | IAdminGetAllUserSuccess | IAdminGetAllUserFail;

export { GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL }

export type {
  IAdminUserState,
  IAdminUserActions
}