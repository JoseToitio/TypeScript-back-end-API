import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public model = new ProductModel();

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;