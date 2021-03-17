import {getProducts} from "../../services/productService";

//types
import {Dispatch} from "redux";
import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, IProductListActions} from "./productListTypes";

const listProducts = () => async (dispatch: Dispatch<IProductListActions>) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST})
    const data = await getProducts
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
  } catch (e) {
    dispatch({type: PRODUCT_LIST_FAIL, payload: e.response ? e.response.data : e})
  }
}

export {
  listProducts,
}
