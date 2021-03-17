import axios from "axios";
import { userDetailService } from "../../services/userDetailService";
//types
import { Dispatch } from "redux";
import { IRootState } from "../store";
import { IUserDetailActions, USER_DETAIL_FAIL, USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS } from "./userDetailTypes";

const getUserDetail = (idOrProfile: string) => async (dispatch: Dispatch<IUserDetailActions>, getState: () => IRootState) => {
  try {
    dispatch({type: USER_DETAIL_REQUEST})
    const { userAuth: { user } } = getState()
    axios.defaults.headers.Authorization = `Bearer ${user?.token}`
    const data = await userDetailService(idOrProfile)
    dispatch({type: USER_DETAIL_SUCCESS, payload: data})
  } catch (e) {
    dispatch({type: USER_DETAIL_FAIL, payload: e.response ? e.response.data : e})
  }
}

export {
  getUserDetail
}
