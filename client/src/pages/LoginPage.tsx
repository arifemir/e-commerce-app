import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../store/user-auth/userAuthActions';
//components
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
//types
import { Location, History } from 'history';
import { IRootState } from '../store/store';
import { IUserState } from '../store/user-auth/userAuthTypes';

interface Props {
  location: Location;
  history: History;
}

const LoginPage = (props: Props) => {
  const { location, history } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector<IRootState, IUserState>(state => state.userAuth);

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (user) {
      history.push(String(redirect));
    }
  }, [history, user, redirect]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error.message}</Message>}
      {loading && <Loader />}
      <Form onSubmit={onSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control value={email} type='email' placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} type='password' placeholder='Enter password' onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;
