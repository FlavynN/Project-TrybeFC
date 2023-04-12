import express = require ('express');

import LeaderboardController from '../controllers/leaderboardController';

const leaderboardRoute = express.Router();

const leaderboardController = new LeaderboardController();

leaderboardRoute.get('/home', leaderboardController.getHome);
leaderboardRoute.get('/away', leaderboardController.getAway);

export default leaderboardRoute;
