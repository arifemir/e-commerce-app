import express from 'express';
import dotenv from 'dotenv';
import dbConn from './config/dbConn';
import colors from 'colors';
import routes from './routes';
import { errorHandler, notFound } from './middleware/errorMiddleware';
import path from 'path';
import morgan from 'morgan';

dotenv.config();
colors.enable();
dbConn();

const app: express.Application = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api', routes);

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'client', 'build', 'index.html'));
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started in ${PORT} mode = ${process.env.NODE_ENV}`.blue.bold);
});
