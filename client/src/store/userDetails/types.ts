import { IUserDetails } from "../../@types";

//action types
export const USER_DETAILS_REQUEST = 'USER_DETAILS_REQUEST'
export const USER_DETAILS_SUCCESS = 'USER_DETAILS_SUCCESS'
export const USER_DETAILS_FAIL = 'USER_DETAILS_FAIL'

//state
export interface IUserDetailsState {
  userDetails: IUserDetails | null,
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
  payload: IUserDetails
}

interface IUserDetailsRequestFailedAction {
  type: typeof USER_DETAILS_FAIL,
  payload: any
}

export type IUserDetailsActionTypes = IUserDetailsRequestAction | IUserDetailsRequestSuccessAction | IUserDetailsRequestFailedAction
