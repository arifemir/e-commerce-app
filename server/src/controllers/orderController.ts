import a from 'express-async-handler';
import Order from '../models/orderModel';
import HttpException from '../helpers/exceptions/HttpException';

const addOrderItems = a(async (req, res, next) => {
  const { orderItems, shippingLocationId, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
  if (orderItems && orderItems.length === 0) {
    throw new HttpException(400, 'No order items');
  }
  const order = new Order({
    user: (req as any).user._id,
    orderItems,
    shippingLocation: shippingLocationId,
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

  const order = await Order.findById(id).populate('user', 'name email');

  if(!order) {
    throw new HttpException(404, 'Order not found');
  }
  res.json(order)
})

export { addOrderItems, getOrderItemById };
