import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardController {
  constructor(private _leaderboardService = new LeaderboardService()) {}

  public getHome = async (_req: Request, res: Response) => {
    const getHomeBoard = await this._leaderboardService.getHome();
    return res.status(200).json(getHomeBoard);
  };

  public getAway = async (_req: Request, res: Response) => {
    const getAwayBoard = await this._leaderboardService.getAway();
    return res.status(200).json(getAwayBoard);
  };
}
