import express from 'express';
import { addOrderItems, getAllOrder, getOrderItemById, getOrdersForUser, updateOrderItemToPaid, updateOrderToDelivered } from '../controllers/orderController';
import { checkIsAdmin } from '../middleware/checkIsAdminMiddleware';
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware';
const router = express.Router();

router.route('/').post(addOrderItems).get(getOrdersForUser);
router.route('/:id').get(getOrderItemById);
router.route('/:id/pay').put(updateOrderItemToPaid);
router.put('/:id/deliver', takeTokenGiveUser, checkIsAdmin, updateOrderToDelivered);
router.get('/allorder', takeTokenGiveUser, checkIsAdmin, getAllOrder);

export default router;
