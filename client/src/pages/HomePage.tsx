import * as React from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import * as types from '../@types';
import { useQuery } from 'react-query';
import { getProducts } from '../services/product';


const HomePage = () => {
  
  const {isLoading, error, data} = useQuery<Promise<Response>, TypeError, types.product[]>('products', () => getProducts)

  if (isLoading) return (<div>'Loading...'</div>)
 
  if (error) return (<div>'An error has occurred: ' + {error.message}</div>)

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {data?.map((product: types.product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
