import { ModelStatic } from 'sequelize';
import Team from '../database/models/Team';
import Matches from '../database/models/Matches';

export default class MatchService {
  private model : ModelStatic<Matches> = Matches;

  public async getMatches() {
    const getMatches = await this.model.findAll(
      { include: [{ model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] }] },
    );
    return getMatches;
  }
}
