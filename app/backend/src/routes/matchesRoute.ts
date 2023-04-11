import express = require ('express');
import MatchesController from '../controllers/matchesController';
import loginValidations from '../middlewares/loginValidations';
import matchValidation from '../middlewares/matchesValidation';

const matchesRoute = express.Router();

const matchesController = new MatchesController();

matchesRoute.get('/', matchesController.getMatches);
matchesRoute.patch('/:id', loginValidations.validateToken, matchesController.updateMatch);
matchesRoute.patch('/:id/finish', loginValidations.validateToken, matchesController.finishMatch);
matchesRoute.post(
  '/',
  loginValidations.validateToken,
  matchValidation.validateTeam,
  matchesController.createMatch,
);

export default matchesRoute;
