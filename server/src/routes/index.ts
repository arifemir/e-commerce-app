import express from 'express';
const router = express.Router();
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware';
import productRoutes from './productRoutes';
import userRoutes from './userRoutes';
import shippingLocationRoutes from './shippingLocationRoutes';
import orderRoutes from "./orderRoutes";

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/shippinglocation', takeTokenGiveUser, shippingLocationRoutes);
router.use('/orders', takeTokenGiveUser, orderRoutes)
export default router;
