import { IPaymentActions, IPaymentState, SAVE_PAYMENT } from './paymentTypes';

const initialState: IPaymentState = {
  paymentMethod: 'Stripe',
};

const paymentReducer = (state = initialState, action: IPaymentActions) => {
  switch (action.type) {
    case SAVE_PAYMENT:
      return {
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
