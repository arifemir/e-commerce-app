import * as React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
//types
import { History } from 'history';
import { IRootState } from '../store/store';
import { ICartState } from '../store/cart/cartTypes';
//components
import FormContainer from '../components/FormContainer';
import ShippingLocations from '../components/ShippingLocations';
import AddShippingAddress from '../components/AddShippingAddress';
import { LinkContainer } from 'react-router-bootstrap';

interface Props {
  history: History
}

const ShippingPage = (props: Props) => {
  const {history} = props;

  const { shippingLocations } = useSelector<IRootState, ICartState>(state => state.cart)

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
