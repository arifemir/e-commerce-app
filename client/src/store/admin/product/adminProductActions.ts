import { Dispatch } from 'redux';
import {
  ADMIN_PRODUCT_FAIL,
  ADMIN_PRODUCT_REQUEST,
  IAdminProductActions,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_UPDATE_SUCCESS,
} from './adminProductTypes';
import { editProductDetail, removeProduct } from '../../../services/admin/adminProductService';
import IProduct from '../../../models/IProduct';

const createNewProduct = (newProduct: IProduct) => async (dispatch: Dispatch<IAdminProductActions>) => {
  dispatch({type: ADMIN_PRODUCT_REQUEST});
  try {
    await createNewProduct(newProduct);
    dispatch({type: PRODUCT_CREATE_SUCCESS});
  } catch (e) {
    dispatch({ type: ADMIN_PRODUCT_FAIL, payload: e.response ? e.response.data : e });
  }
}

const editProduct = (id: string, editedProduct: IProduct) => async (dispatch: Dispatch<IAdminProductActions>) => {
  dispatch({type: ADMIN_PRODUCT_REQUEST});
  try {
    await editProductDetail(id, editedProduct);
    dispatch({type: PRODUCT_UPDATE_SUCCESS});
  } catch (e) {
    dispatch({ type: ADMIN_PRODUCT_FAIL, payload: e.response ? e.response.data : e });
  }
}

const deleteProduct = (id: string) => async (dispatch: Dispatch<IAdminProductActions>) => {
  dispatch({type: ADMIN_PRODUCT_REQUEST});
  try {
    await removeProduct(id);
    dispatch({type: PRODUCT_DELETE_SUCCESS});
  } catch (e) {
    dispatch({ type: ADMIN_PRODUCT_FAIL, payload: e.response ? e.response.data : e });
  }
}

export {
  createNewProduct,
  editProduct,
  deleteProduct,
}
