import express = require('express');

import TeamController from '../controllers/teamController';

const teamRoute = express.Router();

const teamController = new TeamController();

teamRoute.get('/', teamController.getAllTeams);
teamRoute.get('/:id', teamController.oneTeam);

export default teamRoute;
