import axios from 'axios';
import { IProduct } from '../@types';
import IReview from '../models/IReview';

const getProducts = (): Promise<IProduct[]> => axios.get('/api/products').then(res => res.data);

const getProduct = (id: string): Promise<IProduct> => axios.get(`/api/products/${id}`).then(res => res.data);

const createNewReview = (id: string, review: IReview) => axios.post(`/api/products/${id}/reviews`, {...review}).then(res => res.data);

export { getProducts, getProduct, createNewReview };
