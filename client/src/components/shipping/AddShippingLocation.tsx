import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { addShippingLocation } from '../../store/shipping/shippingActions';
//types
import { History, Location } from 'history';
import { IRootState } from '../../store/store';
import { ICartState } from '../../store/cart/cartTypes';
//components
import FormContainer from '../common/FormContainer';

interface Props {
  history?: History;
  location?: Location;
}

const AddShippingAddress = (props: Props) => {
  const {history, location} = props;

  const dispatch = useDispatch();

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const redirect = location && location.search ? location.search.split('=')[1] : '/';

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addShippingLocation({address, city, postalCode, country}));
    if(history && redirect) {
      history.push(redirect);
    }
  }
  return (
    <FormContainer>
    <h1>Shipping</h1>
    <Form onSubmit={onSubmit}>
      <Form.Group controlId='address'>
        <Form.Label>Address</Form.Label>
        <Form.Control 
          type='text'
          placeholder='Enter address'
          value={address}
          required
          onChange={e => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='city'>
        <Form.Label>City</Form.Label>
        <Form.Control 
          type='text'
          placeholder='Enter city'
          value={city}
          required
          onChange={e => setCity(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='postalCode'>
        <Form.Label>Postal Code</Form.Label>
        <Form.Control 
          type='text'
          placeholder='Enter postal code'
          value={postalCode}
          required
          onChange={e => setPostalCode(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId='country'>
        <Form.Label>Postal Code</Form.Label>
        <Form.Control 
          type='text'
          placeholder='Enter country'
          value={country}
          required
          onChange={e => setCountry(e.target.value)}
        />
      </Form.Group>

      <Button type='submit' variant='primary'>
        Continue
      </Button>
    </Form>
  </FormContainer>
  )
}

export default AddShippingAddress
