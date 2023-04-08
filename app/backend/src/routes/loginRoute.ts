import express = require ('express');

import loginValidations from '../middlewares/loginValidations';
import LoginController from '../controllers/loginController';

const loginRoute = express.Router();

const loginController = new LoginController();

loginRoute.post(
  '/',
  loginValidations.reqFields,
  loginValidations.validateEmail,
  loginValidations.validatePassword,
  loginController.login,
);

loginRoute.get('/role', loginValidations.validateToken, loginController.verifyLogin);

export default loginRoute;
