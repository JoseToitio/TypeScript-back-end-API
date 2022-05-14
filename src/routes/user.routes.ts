import { Router } from 'express';
import UserController from '../controller/user.controller';
import UserMiddleware from '../middlewares/user.middleware';

const router = Router();
const userMiddleware = new UserMiddleware();
const userController = new UserController();

router.post(
  '/users',
  userMiddleware.validClass,
  userMiddleware.validLevel,
  userMiddleware.validPassword,
  userMiddleware.validUser,
  userController.create,
);
export default router;