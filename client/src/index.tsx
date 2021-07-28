import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'alertifyjs/build/css/alertify.css';
import './reset.css';
import './bootstrap.min.css';
import './index.css';
import 'animate.css';
import App from './App';
//redux
import { Provider } from 'react-redux';
import store from './store/store';
//stripe
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(String(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY));

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <Provider store={store}>
      <App />
    </Provider>
  </Elements>,
  document.getElementById('root'),
);
