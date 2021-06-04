import axios from 'axios'
import { IProduct } from '../../@types';

const createProduct = (): Promise<IProduct> => axios.post('/api/products').then((res) => res.data);

const removeProduct = (id: string) => axios.delete(`/api/products/${id}`).then((res) => res.data);

const editProductDetail = (id: string, editedProduct: IProduct): Promise<IProduct> => axios.put(`/api/products/${id}`, { editedProduct }).then((res) => res.data);

const uploadProductImg = (formData: FormData) => axios.post('/api/upload', formData, {
  headers: { 'Content-type': 'multipart/form-data' }
  }).then(res => res.data);

export {
  createProduct,
  removeProduct,
  editProductDetail,
  uploadProductImg,
}
