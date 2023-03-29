import express = require('express');

import teamController from '../controllers/teamController';

const teamRoute = express.Router();

teamRoute.get('/', teamController.getAllTeams);

export default teamRoute;
