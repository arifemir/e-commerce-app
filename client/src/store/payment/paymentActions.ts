import { SAVE_PAYMENT } from './paymentTypes';

const savePaymentMethod = (paymentMethod: string) => ({
  type: SAVE_PAYMENT,
  payload: paymentMethod,
});

export { savePaymentMethod };
