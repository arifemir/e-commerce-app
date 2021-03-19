import a from 'express-async-handler';
import HttpException from '../helpers/exceptions/HttpException';
import ShippingLocation, { IShippingLocation } from '../models/shippingLocationModel';
import { IUser } from '../models/userModel';

const getShippingLocations = a(async (req, res, next) => {
  const user: IUser = (req as any).user;
  const shippingLocations = await ShippingLocation.find({user: user._id}).select('-user');
  res.send(shippingLocations);
});

const addShippingLocation = a(async (req, res, next) => {
  const user: IUser = (req as any).user;
  const newShippingLocation: IShippingLocation = req.body.newShippingLocation
  await ShippingLocation.create({...newShippingLocation, user: user._id})
  res.sendStatus(201);
});

const updateShippingLocation = a(async (req, res, next) => {
  const updatedShippingLocation: IShippingLocation = req.body.updatedShippingLocation;
  console.log(updatedShippingLocation)
  try {
    await ShippingLocation.findByIdAndUpdate(updatedShippingLocation._id, updatedShippingLocation)
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    throw new HttpException(500, 'asdasda');
  }
  
});

const deleteShippingLocation = a(async (req, res, next) => {
  const id: IShippingLocation['_id'] = req.params.id;
  await ShippingLocation.findByIdAndRemove(id)
  res.sendStatus(204)
});

export { getShippingLocations, updateShippingLocation, deleteShippingLocation, addShippingLocation };
