import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import App from './App';
//redux
import { Provider } from 'react-redux';
import store from './store/store';
//stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(String(process.env.STRIPE_PUBLISHABLE_KEY))

ReactDOM.render(
  <Provider store={store}>
    <Elements stripe={stripePromise} >
      <App />
    </Elements>
  </Provider>,
  document.getElementById('root'),
);
