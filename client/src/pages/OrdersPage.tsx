import * as React from 'react';
import { useEffect } from 'react';
import { Row, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getAllMyOrder } from '../store/order/orderActions';
//types
import { History } from 'history';
import { IOrderState } from '../store/order/orderTypes';
import { IRootState } from '../store/store';
//components
import { Message, Loader } from '../components';

interface Props {
  history: History;
}

const OrdersPage = (props: Props) => {
  const { history } = props;

  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector<IRootState, IOrderState>(state => state.order);

  useEffect(() => {
    dispatch(getAllMyOrder());
  }, [history]);

  if (loading) return <Loader />;

  return (
    <Row className='px-3'>
      {error && <Message variant='danger'>{error.message}</Message>}
      <h2>My Orders</h2>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr className='table-cell-align'>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th />
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
