import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, IProductsActionTypes} from "./types";
import {getProducts} from "../../services/product";
import {Dispatch} from "react";

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
