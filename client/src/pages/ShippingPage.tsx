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
import CheckoutSteps from '../components/shipping/CheckoutSteps';

const ShippingPage = () => {
  const dispatch = useDispatch();
  const { loading, error, shippingLocations } = useSelector<IRootState, IShippingState>(state => state.shipping);

  useEffect(() => {
    if (shippingLocations.length === 0) dispatch(getAllShippingLocation());
  }, []);

  if (loading) return <Loader />;

  return (
    <Col lg={12} className='m-auto'>
      {error && <Message variant='danger'>{error.message}</Message>}
      <Row className='justify-content-center'>
        <CheckoutSteps step1 step2 />
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <ShippingLocations shippingLocations={shippingLocations} />
        </Col>
        <Col sm={12} md={6}>
          <Row className='justify-content-center justify-content-lg-start justify-content-md-start mt-2 mt-lg-0 mt-md-0'>
            <LinkContainer to='/addshippinglocation?redirect=/shipping'>
              <Button color='link'>Add new shipping address</Button>
            </LinkContainer>
          </Row>
          <Row className='mt-2 justify-content-center justify-content-lg-start justify-content-md-start'>
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
