import express = require ('express');
import MatchesController from '../controllers/matchesController';

const matchesRoute = express.Router();

const matchesController = new MatchesController();

matchesRoute.get('/', matchesController.getMatches);

export default matchesRoute;
