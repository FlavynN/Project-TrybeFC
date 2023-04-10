import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { allTeams, oneTeam } from './mock/mockTeam';

import { Response } from 'superagent';
import { Model } from 'sequelize';
import Team from '../database/models/Team';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /teams', () => {
  afterEach(sinon.restore);

  it('Retorna todos os times', async () => {
    sinon.stub(Model, 'findAll').resolves(allTeams as Team[]);

    const httpResponse = await chai.request(app).get('/teams');
    expect(httpResponse.status).to.be.equal(200);
  });

  it('Retorna um time atraves d', async () => {
    sinon.stub(Model, 'findByPk').resolves(oneTeam as Team);

    const httpResponse = await chai.request(app).get('/teams/1');
    expect(httpResponse.body).to.deep.equal(oneTeam);
    expect(httpResponse.status).to.be.equal(200);

  });
});
