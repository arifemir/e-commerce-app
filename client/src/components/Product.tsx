import * as React from 'react'
import * as types from '../@types'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const { Img, Body, Title, Text } = Card

interface Props {
  product: types.product
}

const Product = (props: Props) => {
  const { product } = props

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Img src={product.image} variant='top' />
      </Link>
      <Body>
        <Link to={`/product/${product._id}`}>
          <Title as='div'>
            <strong>{product.name}</strong>
          </Title>
        </Link>
        <Text as='div'>
          <div className='my-3'>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </div>
        </Text>
        <Text as='h3'>${product.price}</Text>
      </Body>
    </Card>
  )
}

export default Product
