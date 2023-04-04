import { ModelStatic } from 'sequelize';
import Team from '../database/models/Team';

export default class TeamService {
  private model : ModelStatic<Team> = Team;

  public async getAllTeams() {
    const getTeam = await this.model.findAll();
    return getTeam;
  }

  public async getOneTeam(id: number) {
    const OneTeam = await this.model.findByPk(id);
    return OneTeam;
  }
}
