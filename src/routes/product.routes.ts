import { Router } from 'express';
import ProductController from '../controller/product.controller';

const router = Router();
const productController = new ProductController();

router.get('/products', productController.getAll);

export default router;