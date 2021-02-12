import { toJSON } from '../helpers/fetching'

const getProducts: Promise<Response> = fetch('/api/products').then(toJSON)

const getProduct = (id: number): Promise<Response> => fetch(`/api/product/${id}`).then(toJSON)

export {
  getProducts,
  getProduct
}