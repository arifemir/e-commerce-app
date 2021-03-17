import Product from '../models/productModel';
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

export { getAllProduct, getProductById };
