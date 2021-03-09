import {combineReducers} from 'redux'

//reducers
import productListReducer from './productList/reducer'
import productDetailsReducer from './productDetails/reducer'
import cartReducer from './cart/reducer'
import UserLoginRegisterReducer from './userLoginRegister/reducer';
import userDetailsReducer from './userDetails/reducer';
import userUpdateReducer from './userUpdate/reducer';

export const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLoginRegister: UserLoginRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateReducer
});
