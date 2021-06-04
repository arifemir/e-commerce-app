import * as React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, editUser, getUserDetails } from '../../store/admin/user/adminUserActions';
//types
import { IRootState } from '../../store/store';
import { IAdminUserState } from '../../store/admin/user/adminUserTypes';
import { match } from 'react-router-dom';
//components
import Message from '../../components/common/Message';
import Loader from '../../components/common/Loader';
import FormContainer from '../../components/common/FormContainer';
import { editUserDetail } from '../../services/admin/adminUserService';
import useAlertify from '../../hooks/useAlertify';
import { getProduct } from '../../services/productService';
import { IProductDetailState } from '../../store/product-detail/productDetailTypes';
import { productDetail } from '../../store/product-detail/productDetailActions';
import { editProduct } from '../../store/admin/product/adminProductActions';
import { IAdminProductState } from '../../store/admin/product/adminProductTypes';

interface params {
  id: string;
}

interface Props {
  match: match<params>
}

const ProductEditPage = (props: Props) => {
  const {match} = props;
  const productId = match.params.id

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector<IRootState, IProductDetailState>(state => state.productDetail);
  const { updateSuccess, loading: processLoading, error: processError } = useSelector<IRootState, IAdminProductState>(state => state.adminProduct);
  const { confirm, success: alertSuccess, error: alertError } = useAlertify()

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(!processLoading)
      dispatch(productDetail(productId))
  }, [updateSuccess]);

  useEffect(() => {
    if(product) {
      setName(product.name)
      setPrice(product.price)
      setImage(product.image)
      setBrand(product.brand)
      setCategory(product.category)
      setCountInStock(product.countInStock)
      setDescription(product.description)
    }
  }, [product]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product)
      confirm('Are you sure you want to update this product',
        () => {
          dispatch(editProduct(productId, {...product, name, price, image, brand, category, countInStock, description}))
          if(updateSuccess) alertSuccess('Update is success');
        }, () => alertError('Cancel')
      );
  };

  return (
    <>
      <Link to={'/admin/productlist'} className='btn btn-primary my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit product</h1>
        {error && <Message variant='danger'>{error.message}</Message>}
        {loading && <Loader />}
        <Form onSubmit={onSubmit}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} type='text' placeholder='Enter name' onChange={e => setName(e.target.value)} />
          </Form.Group>

          <Form.Group controlId='price'>
            <Form.Label>Price</Form.Label>
            <Form.Control value={price} type='number' placeholder='Enter price' onChange={e => setPrice(Number(e.target.value))} />
          </Form.Group>

          <Form.Group controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Control value={category} type='text' placeholder='Enter category' onChange={e => setCategory(e.target.value)} />
          </Form.Group>

          <Form.Group controlId='category'>
            <Form.Label>Count in stock</Form.Label>
            <Form.Control value={countInStock} type='number' placeholder='Enter count in stock' onChange={e => setCountInStock(Number(e.target.value))} />
          </Form.Group>

          <Form.Group controlId='brand'>
            <Form.Label>Brand</Form.Label>
            <Form.Control value={brand} type='text' placeholder='Enter brand' onChange={e => setBrand(e.target.value)} />
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control value={description} type='text' placeholder='Enter description' onChange={e => setDescription(e.target.value)} />
          </Form.Group>

          <Form.Group controlId='image'>
            <Form.Label>Image</Form.Label>
            <Form.Control value={image} type='text' placeholder='Enter image url' onChange={e => setImage(e.target.value)} />
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default ProductEditPage;
