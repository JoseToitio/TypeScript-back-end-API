import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Product[]> => {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    return result as Product[];
  };

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO Trybesmith.Products (name, amount)
       VALUES (?,?)
      `, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return {
      id: insertId,
      ...product,
    };
  }

  public async getById(orderId: number) {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products WHERE orderId = ?',
      [orderId],
    );
    const [rows] = result;
    return rows as Product[];
  }
}