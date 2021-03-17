import { IUser } from "../../@types";

//action types
export const USER_CHANGE_REQUEST = 'USER_LOGIN_REGISTER_REQUEST'
export const USER_LOGIN_REGISTER_SUCCESS = 'USER_LOGIN_REGISTER_SUCCESS'
export const USER_CHANGE_FAIL = 'USER_LOGIN_REGISTER_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_UPDATE = 'USER_UPDATE'
export const GET_STORED_USER_DATA = 'GET_STORED_USER_DATA'

//state
export interface IUserState {
  user: IUser | null,
  loading: boolean,
  error: any,
  updateSuccess: boolean,
}

//actions
interface IUserChangeRequestAction {
  type: typeof USER_CHANGE_REQUEST,
  payload?: boolean
}

interface IUserLoginRegisterRequestSuccessAction {
  type: typeof USER_LOGIN_REGISTER_SUCCESS,
  payload: IUser
}

interface IUserChangeRequestFailedAction {
  type: typeof USER_CHANGE_FAIL,
  payload: any
}

interface IUserLogout {
  type: typeof USER_LOGOUT
}

interface IUserUpdateRequestSuccessAction {
  type: typeof USER_UPDATE,
  payload: IUser
}

interface IGetStoredUserDataAction {
  type: typeof GET_STORED_USER_DATA,
  payload: IUser | null
}

export type IUserActionTypes = IUserChangeRequestAction | IUserLoginRegisterRequestSuccessAction | IUserChangeRequestFailedAction | IUserLogout | IUserUpdateRequestSuccessAction | IGetStoredUserDataAction
