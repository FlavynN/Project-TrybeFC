import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

export default class TokenJwt {
  private secret = process.env.JWT_SECRET || 'secret';

  private config: jwt.SignOptions = {
    algorithm: 'HS256',
    expiresIn: '7h',
  };

  public generateToken = (payload: Omit<IUser, 'password' |
  'email' | 'username' >) => jwt.sign({ payload }, this.secret, this.config);

  public verifyToken = (token: string) => jwt.verify(token, this.secret);
}
