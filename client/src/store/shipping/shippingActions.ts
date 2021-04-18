import axios from 'axios';
import { Dispatch } from 'redux';
import { IShippingLocation } from '../../@types';
import { getShippingLocations, postShippingLocation, putShippingLocation, removeShippingLocation } from '../../services/shippingService';
import { IRootState } from '../store';
import {
  ADD_SHIPPING_LOCATION,
  DELETE_SHIPPING_LOCATION,
  ERROR_SHIPPING_LOCATION,
  GET_SHIPPING_LOCATION,
  IShippingActions,
  LOADING_SHIPPING_LOCATION,
  SELECT_SHIPPING_LOCATION,
  UPDATE_SHIPPING_LOCATION,
  RESET_SHIPPING,
} from './shippingTypes';

const getAllShippingLocation = () => async (dispatch: Dispatch<IShippingActions>, getState: () => IRootState) => {
  try {
    dispatch({ type: LOADING_SHIPPING_LOCATION });
    const data: IShippingLocation[] = await getShippingLocations();
    dispatch({ type: GET_SHIPPING_LOCATION, payload: data });
    localStorage.setItem('shipping', JSON.stringify(getState().shipping));
  } catch (e) {
    dispatch({ type: ERROR_SHIPPING_LOCATION, payload: e.response ? e.response.data : e });
  }
};

const addShippingLocation = (shippingLocation: IShippingLocation) => async (
  dispatch: Dispatch<IShippingActions>,
  getState: () => IRootState,
) => {
  try {
    dispatch({ type: LOADING_SHIPPING_LOCATION });
    await postShippingLocation(shippingLocation);
    dispatch({ type: ADD_SHIPPING_LOCATION, payload: shippingLocation });
    localStorage.setItem('shipping', JSON.stringify(getState().shipping));
  } catch (e) {
    dispatch({ type: ERROR_SHIPPING_LOCATION, payload: e.response ? e.response.data : e });
  }
};

const updateShippingLocation = (shippingLocation: IShippingLocation) => async (
  dispatch: Dispatch<IShippingActions>,
  getState: () => IRootState,
) => {
  try {
    dispatch({ type: LOADING_SHIPPING_LOCATION });
    await putShippingLocation(shippingLocation);
    dispatch({ type: UPDATE_SHIPPING_LOCATION, payload: shippingLocation });
    localStorage.setItem('shipping', JSON.stringify(getState().shipping));
  } catch (e) {
    dispatch({ type: ERROR_SHIPPING_LOCATION, payload: e.response ? e.response.data : e });
  }
};

const deleteShippingLocation = (id: string) => async (dispatch: Dispatch<IShippingActions>, getState: () => IRootState) => {
  try {
    dispatch({ type: LOADING_SHIPPING_LOCATION });
    await removeShippingLocation(id);
    dispatch({ type: DELETE_SHIPPING_LOCATION, payload: id });
    localStorage.setItem('shipping', JSON.stringify(getState().shipping));
  } catch (e) {
    dispatch({ type: ERROR_SHIPPING_LOCATION, payload: e.response ? e.response.data : e });
  }
};

const selectShippingLocation = (i: number) => async (dispatch: Dispatch<IShippingActions>, getState: () => IRootState) => {
  dispatch({ type: SELECT_SHIPPING_LOCATION, payload: i });
  localStorage.setItem('shipping', JSON.stringify(getState().shipping));
};

const resetShipping = () => {
  localStorage.setItem('shipping', '');
  return {type: RESET_SHIPPING}
}

export { getAllShippingLocation, addShippingLocation, updateShippingLocation, deleteShippingLocation, selectShippingLocation, resetShipping };
