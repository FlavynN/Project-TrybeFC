import express = require('express');

import teamController from '../controllers/teamController';

const teamRoute = express.Router();

teamRoute.get('/', teamController.getAllTeams);
teamRoute.get('/:id', teamController.oneTeam);

export default teamRoute;
