import * as React from 'react'
import { useEffect } from "react";
import { Col, Row } from 'react-bootstrap';
//redux
import { listProducts } from "../store/product-list/productListActions";
import { useDispatch, useSelector } from "react-redux";
//types
import { IProductListState } from "../store/product-list/productListTypes";
import { IRootState } from "../store/store";
//components
import Product from '../components/Product';
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomePage = () => {
  const dispatch = useDispatch()
  const {loading, error, products} = useSelector<IRootState, IProductListState>(state => state.productList)

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
