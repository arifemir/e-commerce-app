import {Dispatch} from 'redux';
import { IShippingLocation } from '../../@types';
import { getShippingLocations, postShippingLocation, putShippingLocation, removeShippingLocation } from '../../services/shippingService';
import { ADD_SHIPPING_LOCATION, DELETE_SHIPPING_LOCATION, ERROR_SHIPPING_LOCATION, GET_SHIPPING_LOCATION, IShippingActions, LOADING_SHIPPING_LOCATION, UPDATE_SHIPPING_LOCATION } from './shippingTypes';

const getAllShippingLocation = () => async (dispatch: Dispatch<IShippingActions>) => {
  try {
    dispatch({type: LOADING_SHIPPING_LOCATION})
    const data: IShippingLocation[] = await getShippingLocations();
    dispatch({type: GET_SHIPPING_LOCATION, payload: data})
  } catch (e) {
    dispatch({ type: ERROR_SHIPPING_LOCATION, payload: e.response ? e.response.data : e });
  }
}

const addShippingLocation = (shippingLocation: IShippingLocation) => async (dispatch: Dispatch<IShippingActions>) => {
  try {
    dispatch({type: LOADING_SHIPPING_LOCATION})
    await postShippingLocation(shippingLocation);
    dispatch({type: ADD_SHIPPING_LOCATION, payload: shippingLocation})
  } catch (e) {
    dispatch({ type: ERROR_SHIPPING_LOCATION, payload: e.response ? e.response.data : e });
  }
}

const updateShippingLocation = (shippingLocation: IShippingLocation) => async (dispatch: Dispatch<IShippingActions>) => {
  try {
    dispatch({type: LOADING_SHIPPING_LOCATION})
    await putShippingLocation(shippingLocation);
    dispatch({type: UPDATE_SHIPPING_LOCATION, payload: shippingLocation})
  } catch (e) {
    dispatch({ type: ERROR_SHIPPING_LOCATION, payload: e.response ? e.response.data : e });
  }
}

const deleteShippingLocation = (id: IShippingLocation['_id']) => async (dispatch: Dispatch<IShippingActions>) => {
  try {
    dispatch({type: LOADING_SHIPPING_LOCATION})
    await removeShippingLocation(id as string)
    dispatch({type: DELETE_SHIPPING_LOCATION, payload: id as string})
  } catch (e) {
    dispatch({ type: ERROR_SHIPPING_LOCATION, payload: e.response ? e.response.data : e });
  }
}

export {
  getAllShippingLocation,
  addShippingLocation,
  updateShippingLocation,
  deleteShippingLocation,
}