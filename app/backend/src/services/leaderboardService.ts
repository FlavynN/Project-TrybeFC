import away from '../utils/queryAwayBoard';
import home from '../utils/queryHomeBoard';
import Matches from '../database/models';

export default class LeaderboardService {
  private _model = Matches;

  public async getHome() {
    const [result] = await this._model.query(home);
    return result;
  }

  public async getAway() {
    const [result] = await this._model.query(away);
    return result;
  }
}
