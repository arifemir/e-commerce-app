import express from 'express';
const router = express.Router();
import productRoutes from './productRoutes';
import userRoutes from './userRoutes';

router.use('/products', productRoutes);
router.use('/users', userRoutes);
export default router;
