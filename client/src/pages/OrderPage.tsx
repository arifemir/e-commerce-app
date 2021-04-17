import * as React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, match } from 'react-router-dom';
import { useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../store/order/orderActions';
//types
import { IRootState } from '../store/store';
import { IOrderState } from '../store/order/orderTypes';
//components
import Loader from '../components/common/Loader';
import Message from '../components/common/Message';

interface params {
  id: string;
}

interface Props {
  match: match<params>;
}

const OrderPage = (props: Props) => {
  const { match } = props;
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const { orderDetails, loading, error } = useSelector<IRootState, IOrderState>(state => state.order);

  let shippingLocation = orderDetails?.shippingLocation;

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, []);

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return !orderDetails ? (
    <></>
  ) : (
    <>
      <h1>Order {orderDetails._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong className='mr-1'>Address:</strong>
                {shippingLocation?.name},{shippingLocation?.address},{shippingLocation?.city},{shippingLocation?.postalCode},
                {shippingLocation?.country}
              </p>
              <p>
                <strong>Name: </strong> {orderDetails.user.name}
              </p>
              <p>
                <strong>Email: </strong> <a href={`mailto:${orderDetails.user.email}`}>{orderDetails.user.email}</a>
              </p>
              {orderDetails.isDelivered ? (
                <Message variant='success'>Delivered on {orderDetails.deliveredAt}</Message>
              ) : (
                <Message variant='danger'>Not delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {orderDetails.paymentMethod}
              </p>
              {orderDetails.isPaid ? (
                <Message variant='success'>Paid on {orderDetails.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not paid</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>

              <ListGroup variant='flush'>
                {orderDetails.orderItems.map((item, i) => {
                  const product = item.product;

                  return (
                    <ListGroup.Item key={i}>
                      <Row>
                        <Col md={1}>
                          <Image src={product.image} alt={product.name} fluid rounded />
                        </Col>
                        <Col>
                          <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </Col>
                        <Col md={4}>
                          {item.quantity} x ${product.price} = ${item.quantity * product.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>
              <h2>Order Summary</h2>
            </Card.Header>
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>${orderDetails.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Shipping</Col>
                <Col>${orderDetails.shippingPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Tax</Col>
                <Col>${orderDetails.taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col>${orderDetails.totalPrice}</Col>
              </Row>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderPage;
