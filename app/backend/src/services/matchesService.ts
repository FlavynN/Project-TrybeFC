import { ModelStatic } from 'sequelize';
import Team from '../database/models/Team';
import Matches from '../database/models/Matches';

export default class MatchService {
  private _model : ModelStatic<Matches> = Matches;

  public async getMatches() {
    const getMatches = await this._model.findAll(
      {
        include: [{ model: Team, as: 'homeTeam', attributes: ['teamName'] },
          { model: Team, as: 'awayTeam', attributes: ['teamName'] }],
      },
    );
    return getMatches;
  }

  public async getInProgress(inProgress: boolean) {
    const progress = await this._model.findAll(
      {
        include: [{ model: Team, as: 'homeTeam', attributes: ['teamName'] },
          { model: Team, as: 'awayTeam', attributes: ['teamName'] },
        ],
        where: { inProgress },
      },
    );
    return progress;
  }
}
