import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';
import ProductModel from './product.model';
import conn from './connection';

export default class OrderModel {
  public connection: Pool;

  public model: ProductModel;

  constructor(connection: Pool) {
    this.connection = connection;
    this.model = new ProductModel(conn);
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    const [rows] = result;
    const orders = rows as Order[];
    const productsPromise = orders.map((order) => this.model.getById(order.id));
    const products = await Promise.all(productsPromise);
    return orders.map((order, index) => ({
      ...order,
      productsIds: products[index].map((product) => product.id),
    }));
  }
}