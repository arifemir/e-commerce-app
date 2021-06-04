import { IProduct } from '../@types';

export default interface ICartItem extends IProduct {
  quantity: number;
}
