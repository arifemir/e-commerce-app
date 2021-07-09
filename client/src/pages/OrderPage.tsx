import * as React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, match } from 'react-router-dom';
import { useEffect, useState } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, payOrder } from '../store/order/orderActions';
//stripe
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { addPaymentIntent } from '../services/paymentIntentService';
//types
import { IRootState } from '../store/store';
import { IOrderState } from '../store/order/orderTypes';
//components
import Loader from '../components/common/Loader';
import Message from '../components/common/Message';
import { IAdminOrderState } from '../store/admin/order/adminOrderTypes';
import { orderDelivered } from '../store/admin/order/adminOrderActions';
import { IUserState } from '../store/user-auth/userAuthTypes';

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
  const stripe = useStripe();
  const elements = useElements();

  const [checkoutError, setCheckoutError] = useState<string | undefined>();
  const { user } = useSelector<IRootState, IUserState>(state => state.userAuth);
  const { orderDetails, loading, error } = useSelector<IRootState, IOrderState>(state => state.order);
  const { deliverChange, loading: adminOrderLoading } = useSelector<IRootState, IAdminOrderState>(state => state.adminOrder);

  let shippingLocation = orderDetails?.shippingLocation;

  useEffect(() => {
    if (!adminOrderLoading) dispatch(getOrder(orderId));
  }, [dispatch, orderId, deliverChange]);

  const onPayment = async () => {
    if (orderDetails?.totalPrice && stripe && elements) {
      const billingDetails = {
        name: orderDetails.user.name,
        email: orderDetails.user.email,
        address: {
          city: orderDetails.shippingLocation.city,
          line1: orderDetails.shippingLocation.address,
          state: orderDetails.shippingLocation.country,
          postal_code: orderDetails.shippingLocation.postalCode,
        },
      };

      const cardElement = elements.getElement('card');

      try {
        const clientSecret = await addPaymentIntent(orderDetails.totalPrice);

        let paymentMethodReq = undefined;

        if (cardElement) {
          paymentMethodReq = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: billingDetails,
          });
        }

        if (paymentMethodReq) {
          if (paymentMethodReq.error) {
            setCheckoutError(paymentMethodReq.error.message);
            return;
          }

          const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethodReq.paymentMethod.id,
          });

          if (error) {
            setCheckoutError(error.message);
            return;
          }

          dispatch(
            payOrder(orderId, {
              id: paymentMethodReq.paymentMethod.id,
              status: 'success',
              email_address: billingDetails.email,
              update_time: new Date(),
            }),
          );
        }
      } catch (err) {
        setCheckoutError(err.message);
      }
    }
  };

  const deliverHandler = () => {
    dispatch(orderDelivered(orderId));
  };

  if (loading) return <Loader />;

  return !orderDetails ? (
    <></>
  ) : (
    <>
      {error && <Message variant='danger'>{error.message}</Message>}
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
                <Col className='text-right'>${orderDetails.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Shipping</Col>
                <Col className='text-right'>${orderDetails.shippingPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Tax</Col>
                <Col className='text-right'>${orderDetails.taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col className='text-right'>${orderDetails.totalPrice}</Col>
              </Row>
            </ListGroup.Item>
            {user?.isAdmin && orderDetails.isPaid && !orderDetails.isDelivered && (
              <Button variant='primary' onClick={deliverHandler}>
                Mark As Delivered
              </Button>
            )}
            {!orderDetails.isPaid && (
              <>
                <ListGroup.Item>
                  <CardElement />
                </ListGroup.Item>
                <ListGroup.Item>
                  {checkoutError && <Message variant='danger'>checkoutError</Message>}
                  <Button variant='primary' onClick={onPayment}>
                    Payment
                  </Button>
                </ListGroup.Item>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderPage;
