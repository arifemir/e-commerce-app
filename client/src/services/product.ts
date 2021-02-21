import { toJSON } from '../helpers/fetching'

const getProducts: Promise<Response> = fetch('/api/products').then(toJSON)

const getProduct = (id: string): Promise<Response> => fetch(`/api/products/${id}`).then(toJSON)

export {
  getProducts,
  getProduct
}