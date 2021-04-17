import express from 'express';
import { addOrderItems, getOrderItemById, updateOrderItemToPaid } from '../controllers/orderController';
const router = express.Router();

router.route('/').post(addOrderItems);
router.route('/:id').get(getOrderItemById);
router.route('/:id/pay').get(updateOrderItemToPaid);

export default router;
