import * as React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { addShippingLocation } from '../../store/shipping/shippingActions';
//components
import FormContainer from '../common/FormContainer';

const AddShippingLocation = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addShippingLocation({ name, address, city, postalCode, country }));
    history.push(String(redirect));
  };

  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter address name' value={name} required onChange={e => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control type='text' placeholder='Enter address' value={address} required onChange={e => setAddress(e.target.value)} />
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control type='text' placeholder='Enter city' value={city} required onChange={e => setCity(e.target.value)} />
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
          <Form.Label>Country</Form.Label>
          <Form.Control type='text' placeholder='Enter country' value={country} required onChange={e => setCountry(e.target.value)} />
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddShippingLocation;
