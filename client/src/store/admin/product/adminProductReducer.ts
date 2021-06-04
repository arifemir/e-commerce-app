import {
  ADMIN_PRODUCT_FAIL,
  ADMIN_PRODUCT_REQUEST, IAdminProductActions,
  IAdminProductState, PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_SUCCESS, PRODUCT_UPDATE_SUCCESS,
} from './adminProductTypes';

const initialState: IAdminProductState = {
  loading: false,
  error: false,
  deleteSuccess: false,
  createSuccess: false,
  updateSuccess: false,
}

const adminProductReducer = (state = initialState, action: IAdminProductActions) => {
  switch (action.type) {
    case ADMIN_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        deleteSuccess: false,
        createSuccess: false,
        updateSuccess: false,
      }
    case ADMIN_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        deleteSuccess: false,
        createSuccess: false,
        updateSuccess: false,
      }
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        deleteSuccess: true,
        loading: false,
      }
    case PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        updateSuccess: true,
        loading: false,
      }
    case PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        createSuccess: true,
        loading: false,
      }
    default:
      return state;
  }
}

export default adminProductReducer;
