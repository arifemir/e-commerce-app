import * as React from 'react'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetail } from '../store/user-detail/userDetailActions'
//types
import { History } from 'history'
import { IRootState } from '../store/store'
import { IUserState } from '../store/user-auth/userAuthTypes'
import { IUserDetailState } from '../store/user-detail/userDetailTypes'
//components
import Message from '../components/Message'
import Loader from '../components/Loader'

interface Props {
  history: History
}

const OrdersPage = (props: Props) => {
  const { history } = props

  const dispatch = useDispatch()
  const { user } = useSelector<IRootState, IUserState>(state => state.userAuth)
  const { userDetail, loading, error } = useSelector<IRootState, IUserDetailState>(state => state.userDetail)

  useEffect(() => {
    if (!user) {
      history.push('/login')
    } else {
      if (!userDetail) {
        dispatch(getUserDetail('profile'))
      }
    }
  }, [history, userDetail, dispatch, user])

  if (loading) return <Loader />

  if (error) return <Message variant='danger'>{error.message}</Message>

  return (
    <Row className='justify-content-center'>
      <Col sm={12} md={9} xl={6}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}

export default OrdersPage
