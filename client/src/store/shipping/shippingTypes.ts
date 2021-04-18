import { IShippingLocation } from '../../@types';

//action types
const GET_SHIPPING_LOCATION = 'GET_SHIPPING_LOCATION';
const LOADING_SHIPPING_LOCATION = 'LOADING_SHIPPING_LOCATION';
const ERROR_SHIPPING_LOCATION = 'ERROR_SHIPPING_LOCATION';
const ADD_SHIPPING_LOCATION = 'ADD_SHIPPING_LOCATION';
const DELETE_SHIPPING_LOCATION = 'DELETE_SHIPPING_LOCATION';
const UPDATE_SHIPPING_LOCATION = 'UPDATE_SHIPPING_LOCATION';
const SELECT_SHIPPING_LOCATION = 'SELECT_SHIPPING_LOCATION';
const RESET_SHIPPING = 'RESET_SHIPPING';

//state
interface IShippingState {
  shippingLocations: IShippingLocation[];
  selectedShippingLocation: IShippingLocation | undefined;
  selectedShippingLocationIndex: number;
  loading: boolean;
  error: any;
}

//actions
interface IGetShippingLocationAction {
  type: typeof GET_SHIPPING_LOCATION;
  payload: IShippingLocation[];
}

interface ILoadingShippingLocationAction {
  type: typeof LOADING_SHIPPING_LOCATION;
}

interface IErrorShippingLocationAction {
  type: typeof ERROR_SHIPPING_LOCATION;
  payload: any;
}

interface IAddShippingLocationAction {
  type: typeof ADD_SHIPPING_LOCATION;
  payload: IShippingLocation;
}

interface IDeleteShippingLocationAction {
  type: typeof DELETE_SHIPPING_LOCATION;
  payload: string;
}

interface IUpdateShippingLocationAction {
  type: typeof UPDATE_SHIPPING_LOCATION;
  payload: IShippingLocation;
}

interface ISelectShippingLocationAction {
  type: typeof SELECT_SHIPPING_LOCATION;
  payload: number;
}

interface IResetShipping {
  type: typeof RESET_SHIPPING,
}

type IShippingActions =
  | IGetShippingLocationAction
  | ILoadingShippingLocationAction
  | IErrorShippingLocationAction
  | IAddShippingLocationAction
  | IDeleteShippingLocationAction
  | IUpdateShippingLocationAction
  | ISelectShippingLocationAction
  | IResetShipping;

export {
  LOADING_SHIPPING_LOCATION,
  ERROR_SHIPPING_LOCATION,
  ADD_SHIPPING_LOCATION,
  DELETE_SHIPPING_LOCATION,
  UPDATE_SHIPPING_LOCATION,
  SELECT_SHIPPING_LOCATION,
  GET_SHIPPING_LOCATION,
  RESET_SHIPPING,
};

export type { IShippingState, IShippingActions };
