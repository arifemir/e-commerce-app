import { combineReducers } from 'redux';

//reducers
import productList from './product-list/productListReducer';
import productDetail from './product-detail/productDetailReducer';
import cart from './cart/cartReducer';
import userAuth from './user-auth/userAuthReducer';
import shipping from './shipping/shippingReducer';
import payment from './payment/paymentReducer';
import order from './order/orderReducer';
import adminUser from './admin/user/adminUserReducer';

export const rootReducer = combineReducers({
  productList,
  productDetail,
  cart,
  userAuth,
  shipping,
  payment,
  order,
  adminUser,
});
