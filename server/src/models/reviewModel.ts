import mongoose, { Schema, Document } from 'mongoose';
import { IProduct } from './productModel';

export interface IReview extends Document {
  product: IProduct['_id'];
  name: string;
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
    name: {
      type: String,
      required: true,
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
