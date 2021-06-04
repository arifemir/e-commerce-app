import Product, { IProduct } from '../models/productModel';
import a from 'express-async-handler';
import HttpException from '../helpers/exceptions/HttpException';

const getAllProduct = a(async (req, res, next) => {
  const products = await Product.find({});
  res.send(products);
});

const getProductById = a(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    throw new HttpException(404, 'Product not found');
  }
});

const deleteProduct = a(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    throw new HttpException(404, 'Product not found');
  }
});

const updateProduct = a(async (req, res, next) => {
  const { name, price, description, image, brand, category, countInStock, } = (req.body.updatedProduct as IProduct)
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock
    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    throw new HttpException(404, 'Product not found');
  }
});

const createProduct = a(async (req, res, next) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: (req as any).user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
});

export { getAllProduct, getProductById, deleteProduct, updateProduct, createProduct };
