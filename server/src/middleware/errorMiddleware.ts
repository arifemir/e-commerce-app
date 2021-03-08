import HttpException ,{IHttpException} from "../helpers/exceptions/HttpException";
import {NextFunction, Request, Response} from "express";

const notFound = ((req: Request, res: Response, next: NextFunction) => {
  next(new HttpException(404, `Not found endpoint - ${req.originalUrl}`))
})

const errorHandler = ((err: IHttpException, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status ? err.status : 500).json({ message: err.message })
})

export {
  notFound,
  errorHandler,
}
