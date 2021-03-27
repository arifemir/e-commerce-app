import * as React from 'react';
import {Nav} from "react-bootstrap";
//types
import { Location } from 'history';
//components
import CheckoutStep from "./CheckoutStep";

interface Props {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
  location: Location;
}

const CheckoutSteps = (props: Props) => {
  const { step1, step2, step3, step4 } = props;

  return (
    <Nav className='justify-content-center mb-4'>
      <CheckoutStep
        step={step1}
        to={`/login?redirect=${location.pathname.split('/')[1]}`}
        content={'Sign In'}
      />

      <CheckoutStep
        step={step2}
        to={'/shipping'}
        content={'Shipping'}
      />

      <CheckoutStep
        step={step3}
        to={'/payment'}
        content={'Payment'}
      />

      <CheckoutStep
        step={step4}
        to={'/placeorder'}
        content={'Place Order'}
      />
    </Nav>
  );
}

CheckoutSteps.defaultProps = {
  location: location,
}

export default CheckoutSteps
