import express from 'express'
const router = express.Router()
import productRoutes from './productRoutes'

router.use('/products', productRoutes)


export default router