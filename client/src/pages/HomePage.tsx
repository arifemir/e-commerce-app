import * as React from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
//redux
import { listProducts } from '../store/product-list/productListActions';
import { useDispatch, useSelector } from 'react-redux';
//types
import { IProductListState } from '../store/product-list/productListTypes';
import { IRootState } from '../store/store';
//components
import Product from '../components/product/Product';
import Loader from '../components/common/Loader';
import Message from '../components/common/Message';
import Paginate from '../components/common/Paginate';
import ProductCarousel from '../components/product/ProductCarousel';

const HomePage = () => {
  const { keyword, pageNumber } = useParams<{ keyword: string; pageNumber: string }>();
  const dispatch = useDispatch();
  const { loading, error, products, page, pages } = useSelector<IRootState, IProductListState>(state => state.productList);

  useEffect(() => {
    dispatch(listProducts(keyword, Number(pageNumber)));
  }, [dispatch, keyword, pageNumber]);

  if (loading) return <Loader />;

  return (
    <>
      {error && <Message variant='danger'>{error.message}</Message>}
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go back
        </Link>
      )}
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
      <Paginate page={page} pages={pages} keyword={keyword} />
    </>
  );
};

export default HomePage;
