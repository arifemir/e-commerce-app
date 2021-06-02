import { Dispatch } from "redux"
import { getAllUser } from "../../../services/admin/adminUserService";
import {
  GET_ALL_USER_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  RESET_ALL_USER,
  IAdminUserActions,
} from './adminUserTypes';

const allUsers = () => async (dispatch: Dispatch<IAdminUserActions>) => {
  dispatch({type: GET_ALL_USER_REQUEST});
  try {
    const allUsers = await getAllUser();
    dispatch({type: GET_ALL_USER_SUCCESS, payload: allUsers})
  } catch(e) {
    dispatch({ type: GET_ALL_USER_FAIL, payload: e.response ? e.response.data : e });
  }
}

const resetUsers = () => ({ type: RESET_ALL_USER})

export {
  allUsers,
  resetUsers
}
