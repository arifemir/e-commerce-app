import express from 'express';
const router = express.Router();
import productRoutes from './productRoutes';
import userRoutes from './userRoutes';
import shippingLocationRoutes from './shippingLocationRoutes';
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware';

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/shippinglocation', takeTokenGiveUser, shippingLocationRoutes);
export default router;
