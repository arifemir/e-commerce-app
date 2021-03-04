import {combineReducers} from 'redux'
import productListReducer from './productList/reducer';
import productDetailsReducer from './productDetails/reducer';

export const rootReducer = combineReducers({
  productListReducer,
  productDetailsReducer,
});
