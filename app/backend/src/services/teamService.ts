import { ITeam } from '../interfaces';
import Team from '../database/models/Team';

const getAllTeams = async ():Promise<ITeam[]> => {
  const getTeam = await Team.findAll();
  return getTeam;
};

const getOneTeam = async (id: number) => {
  const OneTeam = await Team.findByPk(id);
  return OneTeam;
};

const teamService = {
  getAllTeams,
  getOneTeam,
};

export default teamService;
