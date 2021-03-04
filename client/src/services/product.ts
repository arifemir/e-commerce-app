import axios from 'axios'
import {product} from "../@types";

const getProducts: Promise<product[]> = axios.get('/api/products').then(res => res.data)

const getProduct = (id: string): Promise<product> => axios.get(`/api/products/${id}`).then(res => res.data)

export {
  getProducts,
  getProduct
}
