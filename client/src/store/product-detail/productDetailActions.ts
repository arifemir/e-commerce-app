import { createNewReview, getProduct } from '../../services/productService';

//types
import { Dispatch } from 'redux';
import { IReview } from '../../@types';
import {
  IProductDetailActions,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from './productDetailTypes';

const productDetail = (_id: string) => async (dispatch: Dispatch<IProductDetailActions>) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    const data = await getProduct(_id);
    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PRODUCT_DETAIL_FAIL, payload: e.response ? e.response.data : e });
  }
};

const createReview = (id: string, review: IReview) => async (dispatch: Dispatch<IProductDetailActions>) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    await createNewReview(id, review);
    dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
  } catch (e) {
    dispatch({ type: PRODUCT_DETAIL_FAIL, payload: e.response ? e.response.data : e });
  }
}

export { productDetail, createReview };
