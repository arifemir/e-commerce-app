import * as React from 'react'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../store/userDetails/actions'
//types
import { History } from 'history'
import { IRootState } from '../store'
import { IUserState } from '../store/userAuthAndChange/types'
import { IUserDetailsState } from '../store/userDetails/types'
//components
import Message from '../components/Message'
import Loader from '../components/Loader'

interface Props {
  history: History
}

const OrdersPage = (props: Props) => {
  const {history} = props

  const dispatch = useDispatch()
  const { user } = useSelector<IRootState, IUserState>(state => state.userAuthAndChange)
  const { userDetails, loading, error } = useSelector<IRootState, IUserDetailsState>(state => state.userDetails)

  useEffect(() => {
    if(!user) {
      history.push('/login')
    } else {
      if(!userDetails) {
        dispatch(getUserDetails('profile'))
      }
    }
  }, [history, userDetails, dispatch, user])

  if (loading) return (<Loader/>)

  if (error) return (<Message variant='danger'>{error.message}</Message>)

  return (
    <Row className='justify-content-center'>
      <Col sm={12} md={9} xl={6} >
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}

export default OrdersPage
