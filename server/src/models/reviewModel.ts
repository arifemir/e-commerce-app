import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from './productModel';
import { IUser } from './userModel';

export interface IReview extends Document {
  product: IProduct['_id'];
  user: IUser['_id'];
  rating: number;
  comment: string;
}

const reviewSchema: Schema = new Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Review = mongoose.model<IReview>('Review', reviewSchema);

export default Review;
