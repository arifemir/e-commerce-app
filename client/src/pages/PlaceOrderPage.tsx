import * as React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { createOrder, clearCreateOrder } from '../store/order/orderActions';
//types
import { IRootState } from '../store/store';
import { ICartState } from '../store/cart/cartTypes';
import { IShippingState } from '../store/shipping/shippingTypes';
import { IPaymentState } from '../store/payment/paymentTypes';
import { IOrderState } from '../store/order/orderTypes';
//components
import { CheckoutSteps, Message } from '../components';

const PlaceOrderPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { cartItems } = useSelector<IRootState, ICartState>(state => state.cart);
  const { selectedShippingLocation: location } = useSelector<IRootState, IShippingState>(state => state.shipping);
  const { paymentMethod } = useSelector<IRootState, IPaymentState>(state => state.payment);
  const { order, success, error } = useSelector<IRootState, IOrderState>(state => state.order);

  const cartItemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingPrice = cartItemsPrice > 100 ? 0 : 15;
  const taxPrice = Number((0.15 * cartItemsPrice).toFixed(2));
  const totalPrice = cartItemsPrice + taxPrice + shippingPrice;

  useEffect(() => {
    if (success && order) {
      history.push(`/order/${order?._id}`);
      dispatch(clearCreateOrder());
    }
  }, [history, success]);

  const onPlaceOrder = () => {
    const orderItems = cartItems.map(ci => ({ quantity: ci.quantity, product: ci._id }));

    dispatch(
      createOrder({
        orderItems,
        shippingLocation: location?._id,
        paymentMethod: paymentMethod,
        totalPrice,
        taxPrice,
        shippingPrice,
        itemsPrice: cartItemsPrice,
        createdAt: new Date(),
      }),
    );
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong className='mr-1'>Address:</strong>
                {location?.name},{location?.address},{location?.city},{location?.postalCode},{location?.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cartItems.map((item, i) => (
                    <ListGroup.Item key={i}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col>
                          <Link to={`/product/${item._id}`}>{item.name}</Link>
                        </Col>
                        <Col md={4}>
                          {item.quantity} x ${item.price} = ${item.quantity * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
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
                <Col>${cartItemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Shipping</Col>
                <Col>${shippingPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Tax</Col>
                <Col>${taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col>${totalPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>{error && <Message variant='danger'>error</Message>}</ListGroup.Item>
            <ListGroup.Item>
              <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={onPlaceOrder}>
                Place Order
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderPage;
