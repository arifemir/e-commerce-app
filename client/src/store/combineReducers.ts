import {combineReducers} from 'redux'

//reducers
import productListReducer from './productList/reducer'
import productDetailsReducer from './productDetails/reducer'
import cartReducer from './cart/reducer'
import UserLoginRegisterReducer from './userLoginRegister/reducer';

export const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLoginRegister: UserLoginRegisterReducer,
});
