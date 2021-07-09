import { getProductTopThree } from '../../services/productService';

//types
import { Dispatch } from 'redux';
import { IProductTopActions, PRODUCT_TOP_FAILED, PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS } from './productTopTypes';

const productTop = () => async (dispatch: Dispatch<IProductTopActions>) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });
    const data = await getProductTopThree();
    dispatch({ type: PRODUCT_TOP_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: PRODUCT_TOP_FAILED, payload: e.response ? e.response.data : e });
  }
};

export { productTop };
