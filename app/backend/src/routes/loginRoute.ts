import express = require ('express');

import verifyRequiredFields from '../middlewares/verifyRequiredFields';
import LoginController from '../controllers/loginController';

const loginRoute = express.Router();

const loginController = new LoginController();

loginRoute.post('/', verifyRequiredFields('login'), loginController.login);

export default loginRoute;
