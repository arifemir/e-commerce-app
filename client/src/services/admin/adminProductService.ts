import axios from 'axios'
import { IProduct } from '../../@types'

const getAllProdut = (): Promise<IProduct> => axios.get('').then((res) => res.data);

export {
  getAllProdut,
}