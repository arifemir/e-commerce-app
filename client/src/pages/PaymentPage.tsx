import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../store/payment/paymentActions';
//types
import { IRootState } from '../store/store';
import { IShippingState } from '../store/shipping/shippingTypes';
//components
import { FormContainer, CheckoutSteps } from '../components';

const PaymentPage = () => {
  const history = useHistory();

  const [paymentMethod, setPaymentMethod] = useState('Stripe');

  const { selectedShippingLocation } = useSelector<IRootState, IShippingState>(state => state.shipping);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedShippingLocation) history.push('/shipping');
  }, [history]);

  const onSubmitPaymentMethod = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={onSubmitPaymentMethod}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            {/* <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentMethod(e.target.value)}
            /> */}
            <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPaymentMethod(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentPage;
