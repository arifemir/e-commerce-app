import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import products from './products'

dotenv.config()

const app: express.Application = express()

app.get('/', req => {
  console.log('hi')
})

app.get('/api/products', (req: Request, res: Response) => {
  res.json(products)
})

app.get('/api/product/:id', (req: Request, res: Response) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started in ${PORT} mode= ${process.env.NODE_ENV}`)
})
