import express from 'express'
import Product from '../models/productModel'
import h from 'express-async-handler'
import HttpException from "../helpers/exceptions/HttpException";
const router = express.Router()

router.get('/', h(async (req, res, next) => {
  const products = await Product.find({})
  res.send(products)
}))

router.get('/:id', h(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
  if(product) {
    res.send(product)
  } else {
    next(new HttpException(404, 'Product not found'))
  }
}))

export default router
