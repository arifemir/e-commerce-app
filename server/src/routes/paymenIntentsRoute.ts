import express from 'express';
import { createPaymentIntent } from '../controllers/paymentIntentController';
const router = express.Router();

router.route('/').post(createPaymentIntent);

export default router;
