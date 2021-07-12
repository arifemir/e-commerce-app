import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { productDetail } from '../../store/product-detail/productDetailActions';
import { editProduct } from '../../store/admin/product/adminProductActions';
import { uploadProductImg } from '../../services/admin/adminProductService';
//types
import { IRootState } from '../../store/store';
import { IProductDetailState } from '../../store/product-detail/productDetailTypes';
import { IAdminProductState } from '../../store/admin/product/adminProductTypes';
//hooks
import useAlertify from '../../hooks/useAlertify';
//components
import { Message, Loader, FormContainer } from '../../components';

const ProductEditPage = () => {
  const { id: productId } = useParams<{ id: string }>();

  const dispatch = useDispatch();
  const { product, loading, error } = useSelector<IRootState, IProductDetailState>(state => state.productDetail);
  const { updateSuccess, loading: processLoading } = useSelector<IRootState, IAdminProductState>(state => state.adminProduct);
  const { confirm, success: alertSuccess, error: alertError } = useAlertify();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  useEffect(() => {
    if (!processLoading) dispatch(productDetail(productId));
  }, [updateSuccess]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product)
      confirm(
        'Are you sure you want to update this product',
        () => {
          dispatch(
            editProduct(productId, {
              ...product,
              name,
              price,
              image,
              brand,
              category,
              countInStock,
              description,
            }),
          );
          if (updateSuccess) alertSuccess('Update is success');
        },
        () => alertError('Cancel'),
      );
  };

  const uploadFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files && e.target.files[0];
    const formData = new FormData();

    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      formData.append('image', file);
      await completeFileUpload(formData);
    }
  };

  const completeFileUpload = async (formData: FormData) => {
    try {
      const path = await uploadProductImg(formData);
      setImage(path);
    } catch (e) {
      console.log(error);
    } finally {
      setSelectedFile('');
    }
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
            <Form.Control
              value={countInStock}
              type='number'
              placeholder='Enter count in stock'
              onChange={e => setCountInStock(Number(e.target.value))}
            />
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
            <Image fluid rounded className='d-block mb-1' src={selectedFile ? selectedFile : image} />
            <Form.File id='image-file' label='Choose file' custom onChange={uploadFileHandler} />
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
