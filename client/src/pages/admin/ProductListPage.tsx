import React, { useEffect } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../store/product-list/productListActions';
import { createNewProduct, deleteProduct } from '../../store/admin/product/adminProductActions';
//types
import { IProductListState } from '../../store/product-list/productListTypes';
import { IAdminProductState } from '../../store/admin/product/adminProductTypes';
import { IRootState } from '../../store/store';
//hooks
import useAlertify from '../../hooks/useAlertify';
//components
import Loader from '../../components/common/Loader';
import Message from '../../components/common/Message';

interface Props {}

const ProductListPage = (props: Props) => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector<IRootState, IProductListState>(state => state.productList);
  const { deleteSuccess, createSuccess, loading: processLoading } = useSelector<IRootState, IAdminProductState>(
    state => state.adminProduct,
  );
  const { confirm, success: alertSuccess, error: alertError } = useAlertify();

  useEffect(() => {
    if (!processLoading) dispatch(listProducts());
  }, [dispatch, deleteSuccess, createSuccess]);

  const deleteHandler = (productId: string) => {
    confirm(
      'Are you sure you want to delete this product',
      () => {
        dispatch(deleteProduct(productId));
        alertSuccess('Delete is success');
      },
      () => alertError('Cancel'),
    );
  };

  const createProductHandler = () => {
    dispatch(createNewProduct());
  };

  if (loading) return <Loader />;

  if (error) return <Message variant='danger'>{error.message}</Message>;

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus' /> Create Product
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>BRAND</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ _id, brand, category, countInStock, description, image, name, numReviews, price, rating }) => (
            <tr key={_id}>
              <td>{_id}</td>
              <td>{name}</td>
              <td>${price}</td>
              <td>{category}</td>
              <td>{brand}</td>
              <td>
                <LinkContainer to={`/admin/product/${_id}/edit`}>
                  <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit' />
                  </Button>
                </LinkContainer>
                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(_id)}>
                  <i className='fas fa-trash' />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ProductListPage;