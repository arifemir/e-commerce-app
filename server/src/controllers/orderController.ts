import a from 'express-async-handler';
import Order from "../models/orderModel";
import HttpException from "../helpers/exceptions/HttpException";

const addOrderItems = a(async (req, res, next) => {
  const { orderItems, shippingLocation, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
  if(orderItems && orderItems.length === 0) {
    throw new HttpException(400, 'No order items');
    return;
  }
  const order = new Order({
    user: (req as any).user._id,
    orderItems,
    shippingLocation: shippingLocation._id,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
  })
  const createdOrder = await order.save();
  res.status(201).send(createdOrder);
});

export {
  addOrderItems
}
