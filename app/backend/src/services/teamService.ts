import { ITeam } from '../interfaces';
import Team from '../database/models/Team';

const getAllTeams = async ():Promise<ITeam[]> => {
  const getTeam = await Team.findAll();
  return getTeam;
};
const teamService = { getAllTeams };

export default teamService;
