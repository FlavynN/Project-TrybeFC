import { Request, Response } from 'express';

import { ILogin } from '../interfaces';
import UserService from '../services/userService';

export default class LoginController {
  constructor(private _userService = new UserService()) {}

  public login = async (req: Request<object, object, ILogin>, res: Response) => {
    const { email, password } = req.body;
    const { type, message } = await this._userService.loginFunction(email, password);
    if (type) return res.status(401).json({ message });
    res.status(200).json({ token: message });
  };

  public verifyLogin = async (req: Request, res: Response) => {
    const { user } = req.body;
    return res.status(200).json({ role: user.payload.role });
  };
}
