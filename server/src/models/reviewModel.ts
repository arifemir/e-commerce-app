import mongoose, {Schema, Document} from 'mongoose'

export interface IReview extends Document {
  name: string,
  rating: number,
  comment: string,
}

const reviewSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    unique: true,
  },
  comment: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

const Review = mongoose.model<IReview>('Review', reviewSchema)

export default Review