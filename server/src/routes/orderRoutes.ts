import express from 'express';
import { addOrderItems, getOrderItemById } from '../controllers/orderController';
const router = express.Router();

router.route('/').post(addOrderItems);
router.route('/:id').get(getOrderItemById);
export default router;
