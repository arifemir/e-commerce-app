import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from './productModel';
import { IShippingLocation } from './shippingLocationModel';
import { IUser } from './userModel';

export interface IOrder extends Document {
  user: IUser['_id'];
  orderItems: { quantity: number; product: IProduct['_id'] }[];
  shippingLocation: IShippingLocation['_id'];
  paymentMethod: string;
  paymentResult: { id: string; status: string; update_time: string; email_address: string };
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  itemsPrice: number;
  isPaid: boolean;
  paidAt: Date;
  isDelivered: boolean;
  deliveredAt: Date;
}

const orderSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: [
      {
        quantity: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingLocation: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Shipping',
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    itemsPrice: { type: Number, required: true },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;
