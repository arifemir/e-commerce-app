import IUser from './IUser';
import IProduct from './IProduct';

interface IReview {
  user?: IUser;
  product?: IProduct['_id'];
  rating: number;
  comment: string;
}

export default IReview;
