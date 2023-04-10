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
}
