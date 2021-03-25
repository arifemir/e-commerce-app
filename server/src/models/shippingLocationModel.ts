import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './userModel';

export interface IShippingLocation extends Document {
  user: IUser['_id'];
  name: string;
  address: string;
  city: number;
  country: string;
}

const shippingLocationSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const ShippingLocation = mongoose.model<IShippingLocation>('Shipping', shippingLocationSchema);

export default ShippingLocation;
