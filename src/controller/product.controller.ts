import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.service';

export default class ProductController {
  public service = new ProductService();

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(StatusCodes.OK).json(products);
  };
}
