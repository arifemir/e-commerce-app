import express from 'express';
import {
  createProduct, createProductReview,
  deleteProduct,
  getAllProduct,
  getProductById, getProductIncludeReview,
  getTopProducts,
  updateProduct,
} from '../controllers/productController';
import { takeTokenGiveUser } from '../middleware/tokenValidatorMiddleware';
import { checkIsAdmin } from '../middleware/checkIsAdminMiddleware';
const router = express.Router();

router.route('/').get(getAllProduct).post(takeTokenGiveUser, checkIsAdmin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .put(takeTokenGiveUser, checkIsAdmin, updateProduct)
  .delete(takeTokenGiveUser, checkIsAdmin, deleteProduct);
router.get('/top', getTopProducts);
router.get('/include-review/:id', getProductIncludeReview);
router.route('/:id/reviews').post(takeTokenGiveUser, createProductReview);
export default router;
