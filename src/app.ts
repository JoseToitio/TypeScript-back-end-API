import express from 'express';
import ProductRoute from './routes/product.routes';

const app = express();

app.use(express.json());
app.use(ProductRoute);

export default app;
