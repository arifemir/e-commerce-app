import * as React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from '../store/userLoginRegister/actions'
//types
import { Location, History } from 'history'
import { IRootState } from '../store'
import { IUserState } from '../store/userLoginRegister/types'
//components
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'

interface Props {
  location: Location;
  history: History;
}

const RegisterPage = (props: Props) => {
  const { location, history } = props

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  const dispatch = useDispatch()
  const { user, loading, error } = useSelector<IRootState, IUserState>(state => state.userLoginRegister)

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if(user) {
      history.push(String(redirect))
    }
  }, [history, user, redirect])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(userRegister(name, email, password))
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error.message}</Message>}
      {loading && <Loader />}
      <Form onSubmit={onSubmit}>
      <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            type='text' 
            placeholder='Enter name'
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            value={email}
            type='email' 
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type='password' 
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            value={confirmPassword}
            type='password' 
            placeholder='Confirm password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterPage
