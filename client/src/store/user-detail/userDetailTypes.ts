import { IUserDetail } from '../../@types'

//action types
const USER_DETAIL_REQUEST = 'USER_DETAIL_REQUEST'
const USER_DETAIL_SUCCESS = 'USER_DETAIL_SUCCESS'
const USER_DETAIL_FAIL = 'USER_DETAIL_FAIL'

//state
interface IUserDetailState {
  userDetail: IUserDetail | null
  loading: boolean
  error: any
}

//actions
interface IUserDetailRequestAction {
  type: typeof USER_DETAIL_REQUEST
  payload?: boolean
}

interface IUserDetailRequestSuccessAction {
  type: typeof USER_DETAIL_SUCCESS
  payload: IUserDetail
}

interface IUserDetailRequestFailedAction {
  type: typeof USER_DETAIL_FAIL
  payload: any
}

type IUserDetailActions = IUserDetailRequestAction | IUserDetailRequestSuccessAction | IUserDetailRequestFailedAction

export { USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS, USER_DETAIL_FAIL }

export type { IUserDetailState, IUserDetailActions }
