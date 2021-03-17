import axios from 'axios'
import { login, register, userUpdate } from '../../services/userAuthService'
//types
import { Dispatch } from 'redux'
import {
  USER_CHANGE_FAIL,
  USER_CHANGE_REQUEST,
  USER_LOGIN_REGISTER_SUCCESS,
  IUserActions,
  USER_LOGOUT,
  USER_UPDATE,
  GET_STORED_USER_DATA,
} from './userAuthTypes'
import { IUser } from '../../@types'
import { IRootState } from '../store'

const userLogin = (email: string, password: string) => async (dispatch: Dispatch<IUserActions>) => {
  try {
    dispatch({ type: USER_CHANGE_REQUEST })
    const data = await login(email, password)
    dispatch({ type: USER_LOGIN_REGISTER_SUCCESS, payload: data })
    localStorage.setItem('user', JSON.stringify(data))
  } catch (e) {
    dispatch({ type: USER_CHANGE_FAIL, payload: e.response ? e.response.data : e })
  }
}

const userRegister = (name: string, email: string, password: string) => async (dispatch: Dispatch<IUserActions>) => {
  try {
    dispatch({ type: USER_CHANGE_REQUEST })
    const data = await register(name, email, password)
    dispatch({ type: USER_LOGIN_REGISTER_SUCCESS, payload: data })
    localStorage.setItem('user', JSON.stringify(data))
  } catch (e) {
    dispatch({ type: USER_CHANGE_FAIL, payload: e.response ? e.response.data : e })
  }
}

const userLogout = () => {
  localStorage.removeItem('user')
  return { type: USER_LOGOUT }
}

const updateUser = (newUserData: IUser) => async (dispatch: Dispatch<IUserActions>, getState: () => IRootState) => {
  try {
    dispatch({ type: USER_CHANGE_REQUEST })
    const {
      userAuth: { user },
    } = getState()
    axios.defaults.headers.Authorization = `Bearer ${user?.token}`
    const data = await userUpdate(newUserData)
    dispatch({ type: USER_UPDATE, payload: data })
    localStorage.setItem('user', JSON.stringify(data))
  } catch (e) {
    dispatch({ type: USER_CHANGE_FAIL, payload: e.response ? e.response.data : e })
  }
}

const getStoredUserData = () => async (dispatch: Dispatch<IUserActions>) => {
  const storedUser = localStorage.getItem('user')

  if (storedUser === null) return

  const user: IUser = await JSON.parse(storedUser)
  dispatch({ type: GET_STORED_USER_DATA, payload: user })
}

export { userLogin, userRegister, userLogout, updateUser, getStoredUserData }
