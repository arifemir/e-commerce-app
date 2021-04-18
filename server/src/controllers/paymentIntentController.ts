import Stripe from 'stripe';
import a from 'express-async-handler';
import HttpException from '../helpers/exceptions/HttpException';

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  apiVersion: '2020-08-27',
})

const createPaymentIntent = a(async (req,res,next) => {
  try {
    const { amount } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd"
    });

    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    throw new HttpException(500, err.message);
  }
})

export { createPaymentIntent }