import * as React from 'react'
import { Col, Row } from 'react-bootstrap';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import * as types from '../@types';
import {listProducts} from "../store/products/actions";
import Product from '../components/Product';
import {RootState} from "../store";
import {IProductListState} from "../store/products/types";


const HomePage = () => {
  const dispatch = useDispatch()
  const {loading, error, products} = useSelector<RootState, IProductListState>(state => state.productsReducer)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  if (loading) return (<div>'Loading...'</div>)

  if (error) return (<div>'An error has occurred: ' + {error.message}</div>)

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products?.map((product: types.product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
