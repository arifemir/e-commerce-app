import { toJSON } from '../helpers/fetching'
import {product} from "../@types";

const getProducts: Promise<product[]> = fetch('/api/products').then(toJSON)

const getProduct = (id: string): Promise<product> => fetch(`/api/products/${id}`).then(toJSON)

export {
  getProducts,
  getProduct
}
