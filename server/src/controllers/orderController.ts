import a from 'express-async-handler';
import Order, { IOrder } from '../models/orderModel';
import HttpException from '../helpers/exceptions/HttpException';
import { IUser } from '../models/userModel';

const addOrderItems = a(async (req, res, next) => {
  const { orderItems, shippingLocation, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
  if (orderItems && orderItems.length === 0) {
    throw new HttpException(400, 'No order items');
  }

  const order = new Order({
    user: (req as any).user._id,
    orderItems,
    shippingLocation,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });
  const createdOrder = await order.save();
  res.status(201).send(createdOrder);
});

const getOrderItemById = a(async (req, res, next) => {
  const { id } = req.params;

  const order = await Order.findById(id).populate('user', 'name email').populate('orderItems.product').populate('shippingLocation');

  if (!order) {
    throw new HttpException(404, 'Order not found');
  }
  res.json(order);
});

const updateOrderItemToPaid = a(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  
  const order: IOrder | null = await Order.findById(id);

  if (!order) {
    throw new HttpException(404, 'Order not found');
  }
  order.isPaid = true;
  order.paidAt = new Date();
  order.paymentResult = {
    id: req.body.id,
    status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.email_address,
  };
  const updatedOrder = await order.save();

  res.send(updatedOrder);
});

const getOrdersForUser = a(async (req, res, next) => {
  const user: IUser = (req as any).user;
  const orders = await Order.find({user: user._id})
  if(!orders) throw new HttpException(404, 'order not found')
  res.send(orders);
})

export { addOrderItems, getOrderItemById, updateOrderItemToPaid, getOrdersForUser };
