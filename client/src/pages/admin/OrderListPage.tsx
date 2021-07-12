import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../store/admin/order/adminOrderActions';
//types
import { IAdminOrderState } from '../../store/admin/order/adminOrderTypes';
import { IRootState } from '../../store/store';
//components
import { Loader, Message } from '../../components';

const OrderListPage = () => {
  const dispatch = useDispatch();
  const { orders, error, loading } = useSelector<IRootState, IAdminOrderState>(state => state.adminOrder);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return (
    <>
      <h1>Orders</h1>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {orders.map(({ _id, totalPrice, user, isPaid, createdAt, isDelivered, paidAt, deliveredAt }) => (
            <tr key={_id}>
              <td>{_id}</td>
              <td>{user && typeof user !== 'string' && user.name}</td>
              <td>{createdAt.toString().substring(0, 10)}</td>
              <td>${totalPrice}</td>
              <td>{isPaid ? paidAt?.toString().substring(0, 10) : <i className='fas fa-times' style={{ color: 'red' }} />}</td>
              <td>{isDelivered ? deliveredAt?.toString().substring(0, 10) : <i className='fas fa-times' style={{ color: 'red' }} />}</td>
              <td>
                <LinkContainer to={`/order/${_id}`}>
                  <Button variant='light' className='btn-sm'>
                    details
                  </Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrderListPage;
