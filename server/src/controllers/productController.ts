import Product, { IProduct } from '../models/productModel';
import a from 'express-async-handler';
import HttpException from '../helpers/exceptions/HttpException';
import Review from '../models/reviewModel';
import { IUser } from '../models/userModel';

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
  const { name, price, description, image, brand, category, countInStock } = req.body.editedProduct as IProduct;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
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
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

const createProductReview = a(async (req, res) => {
  const { rating, comment } = req.body;
  const user: IUser = (req as any).user
  try {
    await Review.create({
      product: req.params.id,
      comment,
      rating,
      user: user._id,
    });

    const reviews = await Review.find({ product: req.params.id });

    const reviewCountForProduct = reviews.length + 1;
    const reviewRateForProduct = (reviews.reduce((a, b) => a + b.rating, 0) / reviewCountForProduct).toFixed(2);

    await Product.findByIdAndUpdate(req.params.id, {
      rating: Number(reviewRateForProduct),
      numReviews: reviewCountForProduct
    });

    res.status(201).json({ message: 'Review added' })
  } catch (e) {
    throw new HttpException(500, e.message);
  }
})

const getTopProducts = a(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.json(products)
})

const getProductIncludeReview = a(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  const reviews = await Review.find({product: req.params.id});
  if (product) {
    res.send({ product, reviews });
  } else {
    throw new HttpException(404, 'Product not found');
  }
});

export { getAllProduct, getProductById, deleteProduct, updateProduct, createProduct, createProductReview, getTopProducts, getProductIncludeReview };
