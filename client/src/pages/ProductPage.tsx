import * as React from 'react'
import {useEffect} from "react";
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link, match } from 'react-router-dom'

//redux
import {RootState} from "../store";
import {IProductDetailsState} from "../store/productDetails/types";
import {productDetails} from "../store/productDetails/actions";
import {useDispatch, useSelector} from "react-redux";

//components
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from '../components/Rating'

interface params {
  id: string;
}

interface Props {
  match: match<params>;
}

const ProductPage = (props: Props) => {
  const {match} = props;

  const dispatch = useDispatch()
  const {loading, error, product} = useSelector<RootState, IProductDetailsState>(state => state.productDetailsReducer)

  useEffect(() => {
    dispatch(productDetails(match.params.id))
  },[dispatch])

  if (loading) return (<Loader/>)

  if (error) return (<Message variant='danger'>{error.message}</Message>)

  return product && (
    <>
      <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
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
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md="3">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
