import connection from './connection';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public getAll = async (): Promise<Product[]> => {
    const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');
    return result as Product[];
  };
}