import express from 'express';
const router = express.Router();
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware';
import productRoutes from './productRoutes';
import userRoutes from './userRoutes';
import shippingLocationRoutes from './shippingLocationRoutes';
import orderRoutes from './orderRoutes';
import paymenIntentsRoutes from './paymenIntentsRoute'
import uploadRoutes from './uploadRoutes';

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/shippinglocation', takeTokenGiveUser, shippingLocationRoutes);
router.use('/orders', takeTokenGiveUser, orderRoutes);
router.use('/payment_intents', takeTokenGiveUser, paymenIntentsRoutes)
router.use('/upload', takeTokenGiveUser, uploadRoutes)

export default router;
