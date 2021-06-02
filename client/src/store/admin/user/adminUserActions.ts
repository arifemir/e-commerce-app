import { Dispatch } from 'redux';
import { getAllUser, removeUser } from '../../../services/admin/adminUserService';
import {
  ADMIN_USER_FAIL,
  ADMIN_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  IAdminUserActions,
  REMOVE_USER_SUCCESS,
  RESET_ALL_USER,
} from './adminUserTypes';
import { IRootState } from '../../store';

const allUsers = () => async (dispatch: Dispatch<IAdminUserActions>) => {
  dispatch({type: ADMIN_USER_REQUEST});
  try {
    const allUsers = await getAllUser();
    dispatch({type: GET_ALL_USER_SUCCESS, payload: allUsers})
  } catch(e) {
    dispatch({ type: ADMIN_USER_FAIL, payload: e.response ? e.response.data : e });
  }
}

const resetUsers = () => ({ type: RESET_ALL_USER })

const deleteUser = (id: string) => async (dispatch: Dispatch<IAdminUserActions>, getState: () => IRootState) => {
  dispatch({type: ADMIN_USER_REQUEST})
  try {
    await removeUser(id)
    const users = getState().adminUser.users.filter(user => user._id !== id);
    dispatch({ type: REMOVE_USER_SUCCESS,  payload: users})
  } catch (e) {
    dispatch({ type: ADMIN_USER_FAIL, payload: e.response ? e.response.data : e });
  }
}

export {
  allUsers,
  resetUsers,
  deleteUser,
}
