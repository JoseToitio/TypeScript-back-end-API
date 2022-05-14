import { Router } from 'express';
import ProductController from '../controller/product.controller';
import ProductMiddleware from '../middlewares/product.middleware';

const router = Router();
const productMiddleware = new ProductMiddleware();
const productController = new ProductController();

router.get('/products', productController.getAll);
router.post(
  '/products',
  productMiddleware.validName,
  productMiddleware.validAmount,
  productController.create,
);
export default router;