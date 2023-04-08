import { Request, Response } from 'express';
import MatchService from '../services/matchesService';

export default class MatchesController {
  constructor(private matchesService = new MatchService()) {}

  public getMatches = async (_req: Request, res: Response) => {
    const getMatches = await this.matchesService.getMatches();
    return res.status(200).json(getMatches);
  };
}
