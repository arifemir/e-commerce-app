import { IUser } from "../../@types";

//action types
export const USER_LOGIN_REGISTER_REQUEST = 'USER_LOGIN_REGISTER_REQUEST'
export const USER_LOGIN_REGISTER_SUCCESS = 'USER_LOGIN_REGISTER_SUCCESS'
export const USER_LOGIN_REGISTER_FAIL = 'USER_LOGIN_REGISTER_FAIL'
export const USER_LOGOUT = 'USER_LOGOUT'

//state
export interface IUserState {
  user: IUser | null,
  loading: boolean,
  error: any
}

//actions
interface IUserLoginOrRegisterRequestAction {
  type: typeof USER_LOGIN_REGISTER_REQUEST,
  payload?: boolean
}

interface IUserLoginOrRegisterRequestSuccessAction {
  type: typeof USER_LOGIN_REGISTER_SUCCESS,
  payload: IUser
}

interface IUserLoginOrRegisterRequestFailedAction {
  type: typeof USER_LOGIN_REGISTER_FAIL,
  payload: any
}

interface IUserLogout {
  type: typeof USER_LOGOUT
}

export type IUserActionTypes = IUserLoginOrRegisterRequestAction | IUserLoginOrRegisterRequestSuccessAction | IUserLoginOrRegisterRequestFailedAction | IUserLogout
