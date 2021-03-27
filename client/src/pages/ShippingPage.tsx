import * as React from 'react';
import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getAllShippingLocation } from '../store/shipping/shippingActions';
//types
import { IRootState } from '../store/store';
import { IShippingState } from '../store/shipping/shippingTypes';
//components
import ShippingLocations from '../components/shipping/ShippingLocations';
import Loader from '../components/common/Loader';
import Message from '../components/common/Message';
import CheckoutSteps from "../components/shipping/CheckoutSteps";

const ShippingPage = () => {
  const dispatch = useDispatch();
  const { loading, error, shippingLocations } = useSelector<IRootState, IShippingState>(state => state.shipping);

  useEffect(() => {
    if (shippingLocations.length === 0) dispatch(getAllShippingLocation());
  }, []);

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return (
    <Col>
      <Row className='justify-content-center'>
        <CheckoutSteps step1 step2 />
      </Row>
      <Row>
        <Col>
          <ShippingLocations shippingLocations={shippingLocations} />
        </Col>
        <Col>
          <Row>
            <LinkContainer to='/addshippinglocation?redirect=/shipping'>
              <Button color='link'>Add new shipping address</Button>
            </LinkContainer>
          </Row>
          <Row className='mt-2'>
            <LinkContainer to='/payment'>
              <Button color='link'>Continue</Button>
            </LinkContainer>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ShippingPage;
