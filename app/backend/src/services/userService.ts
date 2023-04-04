import { compareSync } from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import Users from '../database/models/Users';
import TokenJwt from '../auth.ts/token';

export default class UserService {
  private model : ModelStatic<Users> = Users;

  public async loginFunction(email: string, password: string) {
    const user = await this.model.findOne({ where: { email } });
    if (!user) {
      return { type: 'INVALID_VALUES', message: 'Invalid email or password' };
    }
    const comparePassword = compareSync(password, user.password);
    if (!comparePassword) {
      return { type: 'INVALID_VALUES', message: 'Invalid email or password' };
    }
    const { id, role } = user;
    const token = new TokenJwt().generateToken({ id, role });
    return { type: null, message: token };
  }
}