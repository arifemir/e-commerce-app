import { login, register } from "../../services/userLoginRegister";
//types
import {Dispatch} from "react";
import {USER_LOGIN_REGISTER_FAIL, USER_LOGIN_REGISTER_REQUEST, USER_LOGIN_REGISTER_SUCCESS, IUserActionTypes} from "./types";

const userLogin = (email: string, password: string) => async (dispatch: Dispatch<IUserActionTypes>) => {
  try {
    dispatch({type: USER_LOGIN_REGISTER_REQUEST})
    const data = await login(email, password)
    dispatch({type: USER_LOGIN_REGISTER_SUCCESS, payload: data})
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (e) {
    dispatch({type: USER_LOGIN_REGISTER_FAIL, payload: e.response ? e.response.data : e})
  }
}

const userRegister = (name: string, email: string, password: string) => async (dispatch: Dispatch<IUserActionTypes>) => {
  try {
    dispatch({type: USER_LOGIN_REGISTER_REQUEST})
    const data = await register(name, email, password)
    dispatch({type: USER_LOGIN_REGISTER_SUCCESS, payload: data})
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (e) {
    dispatch({type: USER_LOGIN_REGISTER_FAIL, payload: e.response ? e.response.data : e})
  }
}

export {
  userLogin,
  userRegister
}
