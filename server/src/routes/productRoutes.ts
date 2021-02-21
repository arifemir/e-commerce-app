import express from 'express'
import Product from '../models/productModel'
import h from 'express-async-handler'
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
    res.status(404).json({message: 'Product not found'})
  }
}))

export default router