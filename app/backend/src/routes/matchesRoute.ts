import express = require ('express');
import MatchesController from '../controllers/matchesController';
import loginValidations from '../middlewares/loginValidations';

const matchesRoute = express.Router();

const matchesController = new MatchesController();

matchesRoute.get('/', matchesController.getMatches);
matchesRoute.patch('/:id', loginValidations.validateToken, matchesController.updateMatch);
matchesRoute.patch('/:id/finish', loginValidations.validateToken, matchesController.finishMatch);

export default matchesRoute;
