import express from 'express'
import { getAllProduct, getProductById } from '../controllers/productController'
const router = express.Router()

router.route('/').get(getAllProduct)
router.route('/:id').get(getProductById)

export default router
