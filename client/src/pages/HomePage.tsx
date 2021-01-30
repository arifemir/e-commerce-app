import * as React from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import * as types from '../@types';
import { useQuery } from 'react-query';
import { toJSON } from '../helpers/fetching';


const HomePage = () => {
  
  const {isLoading, error, data} = useQuery<boolean, any, types.product[]>('products', () => fetch('/api/products').then(toJSON))

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
