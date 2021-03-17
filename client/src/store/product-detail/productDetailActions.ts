import { getProduct } from '../../services/productService';

//types
import { Dispatch } from 'redux';
import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, IProductDetailActions } from './productDetailTypes';

const productDetail = (_id: string) => async (dispatch: Dispatch<IProductDetailActions>) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });
    const data = await getProduct(_id);
    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PRODUCT_DETAIL_FAIL, payload: e.response ? e.response.data : e });
  }
};

export { productDetail };
