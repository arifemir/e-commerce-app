import * as React from 'react';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { match } from 'react-router-dom';
//redux
import { productDetail } from '../store/product-detail/productDetailActions';
import { useDispatch, useSelector } from 'react-redux';
//types
import { History } from 'history';
import { IRootState } from '../store/store';
import { IProductDetailState } from '../store/product-detail/productDetailTypes';
//components
import { Loader, Message, Rating, Reviews } from '../components';

interface params {
  id: string;
}

interface Props {
  match: match<params>;
  history: History;
}

const ProductPage = (props: Props) => {
  const { match, history } = props;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { loading, error, product, createReviewSuccess } = useSelector<IRootState, IProductDetailState>(state => state.productDetail);

  useEffect(() => {
    if (!loading) dispatch(productDetail(match.params.id));
  }, [dispatch, match, createReviewSuccess]);

  const onAddToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${quantity}`);
  };

  return product ? (
    <>
      {loading && <Loader />}
      {error && <Message variant='danger'>{error.message}</Message>}
      <Button className='px-0' onClick={() => history.goBack()} variant='link'>
        Go Back
      </Button>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md='3'>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                      <Form.Control as='select' value={quantity} onChange={e => setQuantity(parseInt(e.target.value))}>
                        {Array.from(Array(product.countInStock), (x, i) => i + 1).map(x => (
                          <option key={x} value={x}>
                            {x}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0} onClick={onAddToCart}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className='flex-row-reverse'>
        <Col md={6}>
          <Reviews match={match} />
        </Col>
      </Row>
    </>
  ) : null;
};

export default ProductPage;
