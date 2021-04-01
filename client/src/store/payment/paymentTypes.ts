const SAVE_PAYMENT = 'SAVE_PAYMENT';

interface IPaymentState {
  paymentMethod: string | undefined;
}

interface ISavePaymentMethod {
  type: typeof SAVE_PAYMENT;
  payload: string;
}

type IPaymentActions = ISavePaymentMethod;

export { SAVE_PAYMENT };
export type { IPaymentState, IPaymentActions };
