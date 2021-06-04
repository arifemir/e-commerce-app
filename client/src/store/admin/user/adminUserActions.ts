import { Dispatch } from 'redux';
import { editUserDetail, getAllUser, getUserDetail, removeUser } from '../../../services/admin/adminUserService';
import {
  ADMIN_USER_FAIL,
  ADMIN_USER_REQUEST,
  GET_ALL_USER_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
  IAdminUserActions,
  REMOVE_USER_SUCCESS,
  RESET_ALL_USER,
  USER_UPDATE_SUCCESS,
} from './adminUserTypes';
import { IRootState } from '../../store';
import IUser from '../../../models/IUser';

const allUsers = () => async (dispatch: Dispatch<IAdminUserActions>) => {
  dispatch({ type: ADMIN_USER_REQUEST });
  try {
    const allUsers = await getAllUser();
    dispatch({ type: GET_ALL_USER_SUCCESS, payload: allUsers });
  } catch (e) {
    dispatch({ type: ADMIN_USER_FAIL, payload: e.response ? e.response.data : e });
  }
};

const resetUsers = () => ({ type: RESET_ALL_USER });

const deleteUser = (id: string) => async (dispatch: Dispatch<IAdminUserActions>, getState: () => IRootState) => {
  dispatch({ type: ADMIN_USER_REQUEST });
  try {
    await removeUser(id);
    const users = getState().adminUser.users.filter(user => user._id !== id);
    dispatch({ type: REMOVE_USER_SUCCESS, payload: users });
  } catch (e) {
    dispatch({ type: ADMIN_USER_FAIL, payload: e.response ? e.response.data : e });
  }
};

const getUserDetails = (id: string) => async (dispatch: Dispatch<IAdminUserActions>) => {
  dispatch({ type: ADMIN_USER_REQUEST });
  try {
    const user = await getUserDetail(id);
    dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: user });
  } catch (e) {
    dispatch({ type: ADMIN_USER_FAIL, payload: e.response ? e.response.data : e });
  }
};

const editUser = (id: string, editedUser: IUser) => async (dispatch: Dispatch<IAdminUserActions>) => {
  dispatch({ type: ADMIN_USER_REQUEST });
  try {
    const user = await editUserDetail(id, editedUser);
    dispatch({ type: USER_UPDATE_SUCCESS, payload: user });
  } catch (e) {
    dispatch({ type: ADMIN_USER_FAIL, payload: e.response ? e.response.data : e });
  }
};

export { allUsers, resetUsers, deleteUser, getUserDetails, editUser };
