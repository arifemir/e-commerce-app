import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import dbConn from './config/dbConn';
import products from './data/products';
import users from './data/users';
import Order from './models/orderModel';
import Product from './models/productModel';
import User from './models/userModel';

colors.enable();
dotenv.config();
dbConn();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    //@ts-ignore
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product, i) => ({ ...product, user: adminUser }));

    await Product.insertMany(sampleProducts);

    console.log('Data imported'.green);
    process.exit();
  } catch (e) {
    console.log(`${e}`.red);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed'.yellow);
    process.exit();
  } catch (e) {
    console.log(`${e}`.red);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
