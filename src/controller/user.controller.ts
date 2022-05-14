import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';

const SECRECT = '123321';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    const token = jwt.sign(userCreated, SECRECT);
    res.status(StatusCodes.CREATED).json({ token });
  };
}