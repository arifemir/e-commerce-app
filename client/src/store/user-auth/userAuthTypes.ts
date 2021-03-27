import { IUser } from '../../@types';

//action types
const USER_CHANGE_REQUEST = 'USER_CHANGE_REQUEST';
const USER_LOGIN_REGISTER_SUCCESS = 'USER_LOGIN_REGISTER_SUCCESS';
const USER_CHANGE_FAIL = 'USER_CHANGE_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_UPDATE = 'USER_UPDATE';

//state
interface IUserState {
  user: IUser | undefined;
  loading: boolean;
  error: any;
  updateSuccess: boolean;
}

//actions
interface IUserChangeRequestAction {
  type: typeof USER_CHANGE_REQUEST;
  payload?: boolean;
}

interface IUserLoginRegisterRequestSuccessAction {
  type: typeof USER_LOGIN_REGISTER_SUCCESS;
  payload: IUser;
}

interface IUserChangeRequestFailedAction {
  type: typeof USER_CHANGE_FAIL;
  payload: any;
}

interface IUserLogout {
  type: typeof USER_LOGOUT;
}

interface IUserUpdateRequestSuccessAction {
  type: typeof USER_UPDATE;
  payload: IUser;
}

type IUserActions =
  | IUserChangeRequestAction
  | IUserLoginRegisterRequestSuccessAction
  | IUserChangeRequestFailedAction
  | IUserLogout
  | IUserUpdateRequestSuccessAction;
export { USER_CHANGE_REQUEST, USER_LOGIN_REGISTER_SUCCESS, USER_CHANGE_FAIL, USER_LOGOUT, USER_UPDATE };

export type { IUserState, IUserActions };
