import express from 'express';
import ProductRoute from './routes/product.routes';
import UserRoute from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(ProductRoute);
app.use(UserRoute);

export default app;
