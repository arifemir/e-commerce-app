import { IUser } from '../models/userModel';
import a from 'express-async-handler';
import HttpException from '../helpers/exceptions/HttpException';

const checkIsAdmin = a((req, res, next) => {
  const user: IUser = (req as any).user;
  if (user && user.isAdmin) next();
  else new HttpException(401, 'Not authorized as an admin');
});

export { checkIsAdmin };
