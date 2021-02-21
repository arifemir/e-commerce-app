import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import dbConn from './config/dbConn'
import colors from 'colors'
import products from './data/products'
import routes from './routes'

dotenv.config()
colors.enable();
dbConn()

const app: express.Application = express()

app.use('/api', routes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started in ${PORT} mode = ${process.env.NODE_ENV}`.blue.bold)
})
