import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import connection from '../models/connection';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}