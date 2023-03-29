import { Request, Response } from 'express';
import teamService from '../services/teamService';

const getAllTeams = async (_req: Request, res: Response) => {
  const getTeams = await teamService.getAllTeams();
  return res.status(200).json(getTeams);
};

const teamController = {
  getAllTeams,
};

export default teamController;
