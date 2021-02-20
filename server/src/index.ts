import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import dbConn from './config/dbConn'
import colors from 'colors'
import products from './data/products'

dotenv.config()
colors.enable();
dbConn()

const app: express.Application = express()

app.get('/', req => {
  console.log('hi')
})

app.get('/api/products', (req: Request, res: Response) => {
  res.json(products)
})

app.get('/api/product/:id', (req: Request, res: Response) => {
  const product = products.find(p => (p as any)._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started in ${PORT} mode = ${process.env.NODE_ENV}`.blue.bold)
})
