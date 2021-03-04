import * as React from 'react'
import {useEffect} from "react";
import { Col, Row } from 'react-bootstrap';

//redux
import {RootState} from "../store";
import {IProductListState} from "../store/productList/types";
import {listProducts} from "../store/productList/actions";
import {useDispatch, useSelector} from "react-redux";

//components
import Product from '../components/Product';
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomePage = () => {
  const dispatch = useDispatch()
  const {loading, error, products} = useSelector<RootState, IProductListState>(state => state.productListReducer)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  if (loading) return (<Loader/>)

  if (error) return (<Message variant='danger'>{error.message}</Message>)

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products && products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
