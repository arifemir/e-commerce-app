import axios from "axios";
import { userUpdate } from "../../services/userUpdate";

//types
import { Dispatch } from "react";
import { IRootState } from "..";
import { IUserUpdateActionTypes, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "./types";
import { IUser } from "../../@types";

const updateUser = (newUserData: IUser) => async (dispatch: Dispatch<IUserUpdateActionTypes>, getState: () => IRootState) => {
  try {
    dispatch({type: USER_UPDATE_REQUEST})
    const { userLoginRegister: { user } } = getState()
    axios.defaults.headers.Authorization = `Bearer ${user?.token}`
    const data = await userUpdate(newUserData)
    dispatch({type: USER_UPDATE_SUCCESS, payload: data})
    localStorage.setItem('user', JSON.stringify(data))
  } catch (e) {
    dispatch({type: USER_UPDATE_FAIL, payload: e.response ? e.response.data : e})
  }
}

export {
  updateUser
}