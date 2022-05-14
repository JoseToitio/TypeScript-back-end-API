import express from 'express';
import ProductRoute from './routes/product.routes';
import UserRoute from './routes/user.routes';
import OrderRoute from './routes/order.routes';

const app = express();

app.use(express.json());
app.use(ProductRoute);
app.use(UserRoute);
app.use(OrderRoute);
export default app;
