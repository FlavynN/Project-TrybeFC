import { Request, Response } from 'express';
import teamService from '../services/teamService';

const getAllTeams = async (_req: Request, res: Response) => {
  const getTeams = await teamService.getAllTeams();
  return res.status(200).json(getTeams);
};

const oneTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const team = await teamService.getOneTeam(+(id));
  return res.status(200).json(team);
};

const teamController = {
  getAllTeams,
  oneTeam,
};

export default teamController;
