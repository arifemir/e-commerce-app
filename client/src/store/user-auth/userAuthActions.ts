import axios from 'axios';
import { login, register, userUpdate } from '../../services/userAuthService';
//types
import { Dispatch } from 'redux';
import {
  USER_CHANGE_FAIL,
  USER_CHANGE_REQUEST,
  USER_LOGIN_REGISTER_SUCCESS,
  IUserActions,
  USER_LOGOUT,
  USER_UPDATE,
} from './userAuthTypes';
import { IUser } from '../../@types';

const userLogin = (email: string, password: string) => async (dispatch: Dispatch<IUserActions>) => {
  try {
    dispatch({ type: USER_CHANGE_REQUEST });
    const data: IUser = await login(email, password);
    dispatch({ type: USER_LOGIN_REGISTER_SUCCESS, payload: data });
    localStorage.setItem('user', JSON.stringify(data));
  } catch (e) {
    dispatch({ type: USER_CHANGE_FAIL, payload: e.response ? e.response.data : e });
  }
};

const userRegister = (name: string, email: string, password: string) => async (dispatch: Dispatch<IUserActions>) => {
  try {
    dispatch({ type: USER_CHANGE_REQUEST });
    const data: IUser = await register(name, email, password);
    dispatch({ type: USER_LOGIN_REGISTER_SUCCESS, payload: data });
    localStorage.setItem('user', JSON.stringify(data));
  } catch (e) {
    dispatch({ type: USER_CHANGE_FAIL, payload: e.response ? e.response.data : e });
  }
};

const userLogout = () => {
  localStorage.removeItem('user');
  return { type: USER_LOGOUT };
};

const updateUser = (newUserData: IUser) => async (dispatch: Dispatch<IUserActions>) => {
  try {
    dispatch({ type: USER_CHANGE_REQUEST });
    const data = await userUpdate(newUserData);
    dispatch({ type: USER_UPDATE, payload: data });
    localStorage.setItem('user', JSON.stringify(data));
  } catch (e) {
    dispatch({ type: USER_CHANGE_FAIL, payload: e.response ? e.response.data : e });
  }
};

export { userLogin, userRegister, userLogout, updateUser };
