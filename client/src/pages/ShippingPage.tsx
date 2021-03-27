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

const ShippingPage = () => {
  const dispatch = useDispatch();
  const { loading, error, shippingLocations } = useSelector<IRootState, IShippingState>(state => state.shipping);

  useEffect(() => {
    if (shippingLocations.length === 0) dispatch(getAllShippingLocation());
  }, []);

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return (
    <Row>
      <Col>
        <ShippingLocations shippingLocations={shippingLocations} />
      </Col>
      <Col>
        <LinkContainer to='/addshippinglocation?redirect=/shipping'>
          <Button color='link'>Add new shipping address</Button>
        </LinkContainer>
      </Col>
    </Row>
  );
};

export default ShippingPage;
