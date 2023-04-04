import { Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  public getAllTeams = async (_req: Request, res: Response) => {
    const getTeams = await this.teamService.getAllTeams();
    return res.status(200).json(getTeams);
  };

  public oneTeam = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this.teamService.getOneTeam(+(id));
    return res.status(200).json(team);
  };
}
