import * as React from 'react';
import { useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { productTop } from '../../store/product-top/productTopActions';
//types
import { IRootState } from '../../store/store';
import { IProductTopState } from '../../store/product-top/productTopTypes';
//components
import Loader from '../common/Loader';
import Message from '../common/Message';

const ProductCarousel = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector<IRootState, IProductTopState>(state => state.productTop);

  useEffect(() => {
    dispatch(productTop());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return (
    <Carousel pause='hover' className='bg-dark'>
      {products.map(product => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} ({product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
