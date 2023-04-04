import { Request, Response } from 'express';

import { ILogin } from '../interfaces';
import UserService from '../services/userService';

export default class LoginController {
  constructor(private userService = new UserService()) {}

  public login = async (req: Request<object, object, ILogin>, res: Response) => {
    const { email, password } = req.body;
    const { type, message } = await this.userService.loginFunction(email, password);
    if (type) return res.status(401).json({ message });
    res.status(200).json({ token: message });
  };
}
