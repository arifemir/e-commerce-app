import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const { Img, Body, Title, Text } = Card;
//types
import * as types from '../../@types';
//components
import Rating from './Rating';

interface Props {
  product: types.IProduct;
}

const Product = (props: Props) => {
  const { product } = props;

  return (
    <Card className='my-3 p-3 rounded' style={{height: '90%'}}>
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
  );
};

export default Product;
