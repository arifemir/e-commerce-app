import * as React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
//types
import { History } from 'history';
import { IRootState } from '../store/store';
//components
import FormContainer from '../components/common/FormContainer';
import ShippingLocations from '../components/shipping/ShippingLocations';
import AddShippingAddress from '../components/shipping/AddShippingLocation';
import { LinkContainer } from 'react-router-bootstrap';
import { IShippingState } from '../store/shipping/shippingTypes';

interface Props {
  history: History
}

const ShippingPage = (props: Props) => {
  const {history} = props;

  const { shippingLocations } = useSelector<IRootState, IShippingState>(state => state.shipping)

  if(shippingLocations.length === 0) return <AddShippingAddress />

  return (
    <Row>
      <Col>
        <ShippingLocations shippingLocations={shippingLocations} />
      </Col>
      <Col>
        <LinkContainer to='/addshippingaddress?redirect=/shipping'>
          <Button color="link">Add new shipping address</Button>
        </LinkContainer>
      </Col>
    </Row>
  )
}

export default ShippingPage
