import React from 'react'
import {useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../store/userAuthAndChange/actions'
//types
import { History } from 'history'
import { IRootState } from '../store'
import { IUserState } from '../store/userAuthAndChange/types'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'

interface Props {
  history: History
}

const UserUpdatePage = (props: Props) => {
  const {history} = props

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  const dispatch = useDispatch()
  const { user, updateSuccess, loading, error } = useSelector<IRootState, IUserState>(state => state.userAuthAndChange)

  useEffect(() => {
    if(!user) {
      history.push('/login')
    } else {
      setName(user.name)
      setEmail(user.email)
    }
  }, [history, dispatch, user])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      if(user) {
        dispatch(updateUser({_id: user._id, name, email, password}))
      }
    }
  }

  return (
    <FormContainer>
      <h2>User Information</h2>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error.message}</Message>}
      {updateSuccess && <Message variant='success'>Profile Updated</Message>}
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
            Update
          </Button>
        </Form>
    </FormContainer>
  )
}

export default UserUpdatePage