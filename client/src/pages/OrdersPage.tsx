import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../store/order/orderActions';
//types
import { History } from 'history';
import { IOrderState } from '../store/order/orderTypes';
import { IRootState } from '../store/store';
//components
import Message from '../components/common/Message';
import Loader from '../components/common/Loader';

interface Props {
  history: History;
}

const OrdersPage = (props: Props) => {
  const { history } = props;

  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector<IRootState, IOrderState>(state => state.order);

  useEffect(() => {
    if (orders.length <= 0) {
      dispatch(getAllOrders());
    }
  }, [history, orders, dispatch]);

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return (
    <Row className='justify-content-center'>
      <Col sm={12} md={9} xl={6}>
        <h2>My Orders</h2>
      </Col>
      {orders.map((item) => (<div>{item.shippingLocation}</div>))}
    </Row>
  );
};

export default OrdersPage;
