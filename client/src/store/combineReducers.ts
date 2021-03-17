import { combineReducers } from 'redux';

//reducers
import productList from './product-list/productListReducer';
import productDetail from './product-detail/productDetailReducer';
import cart from './cart/cartReducer';
import userAuth from './user-auth/userAuthReducer';
import userDetail from './user-detail/userDetailReducer';

export const rootReducer = combineReducers({
  productList,
  productDetail,
  cart,
  userAuth,
  userDetail,
});
