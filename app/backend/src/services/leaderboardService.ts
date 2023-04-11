import home from '../utils/queryLeaderboard';
import Matches from '../database/models';

export default class LeaderboardService {
  private _model = Matches;

  public async getHome() {
    const [result] = await this._model.query(home);
    return result;
  }
}
