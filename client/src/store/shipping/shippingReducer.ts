import {
  ADD_SHIPPING_LOCATION,
  LOADING_SHIPPING_LOCATION,
  IShippingActions,
  IShippingState,
  ERROR_SHIPPING_LOCATION,
  DELETE_SHIPPING_LOCATION,
  SELECT_SHIPPING_LOCATION,
  GET_SHIPPING_LOCATION,
} from './shippingTypes';

const initialState: IShippingState = {
  shippingLocations: [],
  selectedShippingLocation: null,
  selectedShippingLocationIndex: 0,
  loading: false,
  error: null,
};

const shippingReducer = (state = initialState, action: IShippingActions) => {
  switch (action.type) {
    case LOADING_SHIPPING_LOCATION:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ERROR_SHIPPING_LOCATION:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SHIPPING_LOCATION:
      return {
        ...state,
        loading: false,
        shippingLocations: action.payload,
      };
    case ADD_SHIPPING_LOCATION:
      return {
        ...state,
        loading: false,
        shippingLocations: [...state.shippingLocations, action.payload],
      };
    case DELETE_SHIPPING_LOCATION:
      return {
        ...state,
        loading: false,
        shippingLocations: state.shippingLocations.filter(shippingLocation => shippingLocation._id !== action.payload),
      };
    case SELECT_SHIPPING_LOCATION:
      return {
        ...state,
        selectedShippingLocation: state.shippingLocations.find(shippingLocation => shippingLocation._id === action.payload),
        selectedShippingLocationIndex: state.shippingLocations.findIndex(shippingLocation => shippingLocation._id === action.payload),
      };
    default:
      return state;
  }
};

export default shippingReducer;
