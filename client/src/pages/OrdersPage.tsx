import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
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
import { LinkContainer } from 'react-router-bootstrap';

interface Props {
  history: History;
}

const OrdersPage = (props: Props) => {
  const { history } = props;

  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector<IRootState, IOrderState>(state => state.order);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [history]);

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return (
    <Row className='px-3'>
      <h2>My Orders</h2>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr className='table-cell-align'>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map(order => (
              <tr className='table-cell-align'>
                <td>{order._id}</td>
                <td>{order.createdAt.toString().substring(0, 10)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    <i className='fas fa-check' style={{ color: 'green' }} />
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    <i className='fas fa-check' style={{ color: 'green' }} />
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='primary'>Details</Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Row>
  );
};

export default OrdersPage;
