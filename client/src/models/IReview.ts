import IUser from './IUser';
import IProduct from './IProduct';

interface IReview {
  _id?: string;
  user?: IUser;
  product?: IProduct['_id'];
  rating: number;
  comment: string;
  createdAt?: Date;
}

export default IReview;
