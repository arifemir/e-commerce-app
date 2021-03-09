import { IUser } from "../../@types";

//action types
export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'

//state
export interface IUserDetailsState {
  user: IUser | null,
  loading: boolean,
  error: any
}

//actions
interface IUserDetailsRequestAction {
  type: typeof USER_DETAILS_REQUEST,
  payload?: boolean
}

interface IUserDetailsRequestSuccessAction {
  type: typeof USER_DETAILS_SUCCESS,
  payload: IUser
}

interface IUserDetailsRequestFailedAction {
  type: typeof USER_DETAILS_FAIL,
  payload: any
}

export type IUserDetailsActionTypes = IUserDetailsRequestAction | IUserDetailsRequestSuccessAction | IUserDetailsRequestFailedAction
