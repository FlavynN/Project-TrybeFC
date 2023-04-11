import { Request, Response } from 'express';
import MatchService from '../services/matchesService';

export default class MatchesController {
  constructor(private _matchesService = new MatchService()) {}

  public getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    console.log(inProgress);

    if (!inProgress) {
      const getMatches = await this._matchesService.getMatches();
      return res.status(200).json(getMatches);
    }

    const getInProgress = await this._matchesService.getInProgress(inProgress === 'true');
    console.log(getInProgress);
    return res.status(200).json(getInProgress);
  };

  public finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._matchesService.finishMatch(+id);
    return res.status(200).json({ message: 'Finished' });
  };

  public updateMatch = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const update = await this._matchesService.updateMatch(+id, +homeTeamGoals, +awayTeamGoals);
    return res.status(200).json(update);
  };
}
