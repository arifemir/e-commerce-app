import IProduct from '../../models/IProduct';

//action types
const PRODUCT_TOP_REQUEST = 'PRODUCT_TOP_REQUEST';
const PRODUCT_TOP_SUCCESS = 'PRODUCT_TOP_SUCCESS';
const PRODUCT_TOP_FAILED = 'PRODUCT_TOP_FAILED';

interface IProductTopState {
  products: IProduct[];
  loading: boolean;
  error: any;
}

interface IProductTopRequest {
  type: typeof PRODUCT_TOP_REQUEST;
}

interface IProductTopSuccess {
  type: typeof PRODUCT_TOP_SUCCESS;
  payload: IProduct[];
}

interface IProductTopFailed {
  type: typeof PRODUCT_TOP_FAILED;
  payload: any;
}

type IProductTopActions = IProductTopRequest | IProductTopSuccess | IProductTopFailed;

export { PRODUCT_TOP_REQUEST, PRODUCT_TOP_SUCCESS, PRODUCT_TOP_FAILED };

export type { IProductTopState, IProductTopActions };
