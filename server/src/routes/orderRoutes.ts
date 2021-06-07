import express from 'express';
import { addOrderItems, getAllOrder, getOrderItemById, getOrdersForUser, updateOrderItemToPaid, updateOrderToDelivered } from '../controllers/orderController';
import { checkIsAdmin } from '../middleware/checkIsAdminMiddleware';
const router = express.Router();

router.route('/allorder').get(checkIsAdmin, getAllOrder);
router.route('/').post(addOrderItems).get(getOrdersForUser);
router.route('/:id').get(getOrderItemById);
router.route('/:id/pay').put(updateOrderItemToPaid);
router.route('/:id/deliver').put(checkIsAdmin, updateOrderToDelivered);

export default router;
