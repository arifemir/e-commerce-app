import express from 'express';
import dotenv from 'dotenv';
import dbConn from './config/dbConn';
import colors from 'colors';
import routes from './routes';
import { errorHandler, notFound } from './middleware/errorMiddleware';
import path from 'path';

dotenv.config();
colors.enable();
dbConn();

const app: express.Application = express();

app.use(express.json());

app.use('/api', routes);

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')))
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started in ${PORT} mode = ${process.env.NODE_ENV}`.blue.bold);
});
