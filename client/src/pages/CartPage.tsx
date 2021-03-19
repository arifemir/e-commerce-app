import * as React from 'react';
import { useEffect } from 'react';
import { Col, ListGroup, Row, Image, Form, Button, Card } from 'react-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../store/cart/cartActions';
//types
import { Link, match } from 'react-router-dom';
import { ICartState } from '../store/cart/cartTypes';
import { IRootState } from '../store/store';
import { History, Location } from 'history';
//components
import Message from '../components/common/Message';

interface params {
  id: string;
}

interface Props {
  match: match<params>;
  history: History;
  location: Location;
}

const CartPage = (props: Props) => {
  const { match, history, location } = props;

  const dispatch = useDispatch();
  const { cartItems } = useSelector<IRootState, ICartState>(state => state.cart);

  const productId = match.params.id;
  const quantity: number = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const onCheckout = () => {
    history.push(`/login?redirect=shipping`);
  };

  return (
    <Row>
      <Col md={8}>
        <h1 className='mb-3'>Shopping cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty{' '}
            <Link to='/'>
              <b>Go Back</b>
            </Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item._id}>
                <Row className='align-items-center'>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control as='select' value={item.quantity} onChange={e => dispatch(addToCart(item._id, Number(e.target.value)))}>
                      {Array.from(Array(item.countInStock), (x, i) => i + 1).map(x => (
                        <option key={x} value={x}>
                          {x}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type='button' variant='light' onClick={() => dispatch(removeToCart(item._id))}>
                      <i className='fas fa-trash' />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) items</h2>$
              {cartItems.reduce((a, c) => a + c.quantity * c.price, 0).toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={onCheckout}>
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartPage;
