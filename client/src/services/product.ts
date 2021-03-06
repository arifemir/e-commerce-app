import axios from 'axios'
import {IProduct} from "../@types";

const getProducts: Promise<IProduct[]> = axios.get('/api/products').then(res => res.data)

const getProduct = (id: string): Promise<IProduct> => axios.get(`/api/products/${id}`).then(res => res.data)

export {
  getProducts,
  getProduct
}
