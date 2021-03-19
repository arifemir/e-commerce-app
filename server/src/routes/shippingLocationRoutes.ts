import express from 'express';
import { addShippingLocation, deleteShippingLocation, getShippingLocations, updateShippingLocation } from '../controllers/shippingLocationController';
const router = express.Router();

router
  .route('/')
  .get(getShippingLocations)
  .post(addShippingLocation)
  .put(updateShippingLocation)
  .delete(deleteShippingLocation)

export default router;
