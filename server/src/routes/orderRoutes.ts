import express from 'express';
import { addOrderItems, getOrderItemById, getOrdersForUser, updateOrderItemToPaid } from '../controllers/orderController';
const router = express.Router();

router.route('/').post(addOrderItems).get(getOrdersForUser);
router.route('/:id').get(getOrderItemById);
router.route('/:id/pay').put(updateOrderItemToPaid);

export default router;
