import { Request, Response, NextFunction } from 'express';
import TeamService from '../services/teamService';

const validateTeam = async (req: Request, res: Response, next: NextFunction) => {
  const _teamService = new TeamService();
  const { homeTeamId, awayTeamId } = req.body;
  if (homeTeamId === awayTeamId) {
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }

  const homeTeam = await _teamService.getOneTeam(homeTeamId);
  const awayTeam = await _teamService.getOneTeam(awayTeamId);

  if (!homeTeam || !awayTeam) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }

  next();
};

const matchValidation = { validateTeam };

export default matchValidation;
