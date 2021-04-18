import axios from 'axios';

const addPaymentIntent = (totalPrice: number): Promise<string> => axios.post("/api/payment_intents", {
  amount: (totalPrice * 100).toFixed(0)
}).then(res => res.data);

export { addPaymentIntent }