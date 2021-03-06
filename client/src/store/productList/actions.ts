import {getProducts} from "../../services/product";

//types
import {Dispatch} from "react";
import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, IProductsActionTypes} from "./types";

const listProducts = () => async (dispatch: Dispatch<IProductsActionTypes>) => {
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
