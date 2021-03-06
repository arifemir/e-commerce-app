import {PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, IProductActionTypes} from "./types";
import {Dispatch} from "react";
import {getProduct} from "../../services/product";

const productDetails = (_id: string) => async (dispatch: Dispatch<IProductActionTypes>) => {
  try {
    dispatch({type: PRODUCT_DETAILS_REQUEST})
    const data = await getProduct(_id)
    dispatch(({type: PRODUCT_DETAILS_SUCCESS, payload: data}))
  } catch (e) {
    dispatch({type: PRODUCT_DETAILS_FAIL, payload: e.response ? e.response.data : e})
  }
}

export {
  productDetails,
}
