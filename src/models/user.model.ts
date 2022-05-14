import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, password, classe, level } = user;
    const result = await this.connection
      .execute<ResultSetHeader>(`INSERT INTO trybesmith.users (username, classe, level, password)
       VALUES (?,?,?,?),
      `, [username, classe, level, password]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return {
      id: insertId,
      ...user,
    };
  }
}