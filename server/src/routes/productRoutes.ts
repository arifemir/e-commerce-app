import express from 'express';
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from '../controllers/productController';
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware';
import { checkIsAdmin } from '../middleware/checkIsAdminMiddleware';
const router = express.Router();

router.route('/').get(getAllProduct).post(takeTokenGiveUser, checkIsAdmin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .put(takeTokenGiveUser, checkIsAdmin, updateProduct)
  .delete(takeTokenGiveUser, checkIsAdmin, deleteProduct);
export default router;
