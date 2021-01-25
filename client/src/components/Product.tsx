import * as React from 'react'
import { Card } from 'react-bootstrap'
import { product } from '../@types'

const {Img, Body, Title, Text} = Card

interface Props {
  product: product
}

const Product = (props: Props) => {
  const { product } = props

  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Img src={product.image} variant='top' />
      </a>
      <Body>
        <a href={`/product/${product._id}`}>
          <Title as='div'>
            <strong>{product.name}</strong>
          </Title>
        </a>
        <Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Text>
        <Text as='h3'>${product.price}</Text>
      </Body>
    </Card>
  )
}

export default Product
