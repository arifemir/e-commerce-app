import axios from 'axios';
import { IShippingLocation, IUser } from '../@types';

const getShippingLocations = (): Promise<IShippingLocation[]> => axios.get('/api/shippinglocation').then(res => res.data);

const putShippingLocation = (updatedShippingLocation: IShippingLocation): Promise<void> =>
  axios.put('/api/shippinglocation', updatedShippingLocation).then(res => res.data);

const postShippingLocation = (newShippingLocation: IShippingLocation): Promise<IShippingLocation> =>
  axios.post('/api/shippinglocation', newShippingLocation).then(res => res.data);

const removeShippingLocation = (id: string): Promise<void> => axios.delete(`/api/shippinglocation?id=${id}`).then(res => res.data);

export { getShippingLocations, putShippingLocation, postShippingLocation, removeShippingLocation };
