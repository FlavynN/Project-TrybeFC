import { Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class TeamController {
  constructor(private _teamService = new TeamService()) {}

  public getAllTeams = async (_req: Request, res: Response) => {
    const getTeams = await this._teamService.getAllTeams();
    return res.status(200).json(getTeams);
  };

  public oneTeam = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this._teamService.getOneTeam(+(id));
    return res.status(200).json(team);
  };
}
