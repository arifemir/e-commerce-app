import * as React from 'react'
import { Col, Row } from 'react-bootstrap';
import {useEffect} from "react";

//redux
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../store/products/actions";
import {RootState} from "../store";
import {IProductListState} from "../store/products/types";

import * as types from '../@types';
import Product from '../components/Product';
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomePage = () => {
  const dispatch = useDispatch()
  const {loading, error, products} = useSelector<RootState, IProductListState>(state => state.productsReducer)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  if (loading) return (<Loader/>)

  if (error) return (<Message variant='danger'>{error.message}</Message>)

  console.log(products)

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products && products.map((product: types.product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
