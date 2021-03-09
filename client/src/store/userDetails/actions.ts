import axios from "axios";
import { userDetails } from "../../services/userDetails";

//types
import { Dispatch } from "react";
import { IRootState } from "..";
import { IUserDetailsActionTypes, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS } from "./types";

const getUserDetails = (idOrProfile: string) => async (dispatch: Dispatch<IUserDetailsActionTypes>, getState: () => IRootState) => {
  try {
    dispatch({type: USER_DETAILS_REQUEST})
    const { userLoginRegister: { user } } = getState()
    axios.defaults.headers.Authorization = `Bearer ${user?.token}`
    const data = await userDetails(idOrProfile)
    dispatch({type: USER_DETAILS_SUCCESS, payload: data})
  } catch (e) {
    dispatch({type: USER_DETAILS_FAIL, payload: e.response ? e.response.data : e})
  }
}

export {
  getUserDetails
}