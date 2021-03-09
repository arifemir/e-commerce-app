import { IUser } from "../../@types";

//action types
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL'
export const USER_UPDATE_RESET = 'USER_UPDATE_RESET'

//state
export interface IUserUpdateState {
  user: IUser | null,
  loading: boolean,
  error: any,
  success: false,
}

//actions
interface IUserUpdateRequestAction {
  type: typeof USER_UPDATE_REQUEST,
  payload?: boolean
}

interface IUserUpdateRequestSuccessAction {
  type: typeof USER_UPDATE_SUCCESS,
  payload: IUser
}

interface IUserUpdateRequestFailedAction {
  type: typeof USER_UPDATE_FAIL,
  payload: any
}

export type IUserUpdateActionTypes = IUserUpdateRequestAction | IUserUpdateRequestSuccessAction | IUserUpdateRequestFailedAction
