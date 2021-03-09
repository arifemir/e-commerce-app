import axios from 'axios';
import { login, register } from "../../services/userLoginRegister";
import { userUpdate } from '../../services/userUpdate';
//types
import {Dispatch} from "react";
import {USER_CHANGE_FAIL, USER_CHANGE_REQUEST, USER_LOGIN_REGISTER_SUCCESS, IUserActionTypes, USER_LOGOUT, USER_UPDATE} from "./types";
import { IUser } from '../../@types';
import { IRootState } from '..';

const userLogin = (email: string, password: string) => async (dispatch: Dispatch<IUserActionTypes>) => {
  try {
    dispatch({type: USER_CHANGE_REQUEST})
    const data = await login(email, password)
    dispatch({type: USER_LOGIN_REGISTER_SUCCESS, payload: data})
    localStorage.setItem('user', JSON.stringify(data))
  } catch (e) {
    dispatch({type: USER_CHANGE_FAIL, payload: e.response ? e.response.data : e})
  }
}

const userRegister = (name: string, email: string, password: string) => async (dispatch: Dispatch<IUserActionTypes>) => {
  try {
    dispatch({type: USER_CHANGE_REQUEST})
    const data = await register(name, email, password)
    dispatch({type: USER_LOGIN_REGISTER_SUCCESS, payload: data})
    localStorage.setItem('user', JSON.stringify(data))
  } catch (e) {
    dispatch({type: USER_CHANGE_FAIL, payload: e.response ? e.response.data : e})
  }
}

const userLogout = () => {
  localStorage.removeItem('user')
  return {type: USER_LOGOUT}
}

const updateUser = (newUserData: IUser) => async (dispatch: Dispatch<IUserActionTypes>, getState: () => IRootState) => {
  try {
    dispatch({type: USER_CHANGE_REQUEST})
    const { userAuthAndChange: { user } } = getState()
    axios.defaults.headers.Authorization = `Bearer ${user?.token}`
    const data = await userUpdate(newUserData)
    dispatch({type: USER_UPDATE, payload: data})
    localStorage.setItem('user', JSON.stringify(data))
  } catch (e) {
    dispatch({type: USER_CHANGE_FAIL, payload: e.response ? e.response.data : e})
  }
}

export {
  userLogin,
  userRegister,
  userLogout,
  updateUser,
}
