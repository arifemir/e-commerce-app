// action types
const ADMIN_PRODUCT_REQUEST = 'ADMIN_PRODUCT_REQUEST';
const ADMIN_PRODUCT_FAIL = 'ADMIN_PRODUCT_FAIL';
const PRODUCT_DELETE_SUCCESS = 'ADMIN_PRODUCT_DELETE';
const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS';
const PRODUCT_CREATE_SUCCESS = 'PRODUCT_CREATE_SUCCESS';

interface IAdminProductState {
  loading: boolean;
  error: any;
  processSuccess: boolean;
}

interface IAdminProductRequest {
  type: typeof ADMIN_PRODUCT_REQUEST;
}

interface IAdminProductFail {
  type: typeof ADMIN_PRODUCT_FAIL;
  payload: any;
}

interface IAdminProductDeleteSuccess {
  type: typeof PRODUCT_DELETE_SUCCESS;
}

interface IAdminProductUpdateFail {
  type: typeof PRODUCT_UPDATE_SUCCESS;
}

interface IAdminProductCreateSuccess {
  type: typeof PRODUCT_CREATE_SUCCESS;
}

type IAdminProductActions = IAdminProductRequest | IAdminProductFail | IAdminProductDeleteSuccess | IAdminProductUpdateFail | IAdminProductCreateSuccess;

export { ADMIN_PRODUCT_FAIL, ADMIN_PRODUCT_REQUEST,  PRODUCT_DELETE_SUCCESS, PRODUCT_UPDATE_SUCCESS, PRODUCT_CREATE_SUCCESS }

export type {
  IAdminProductState,
  IAdminProductActions,
}
