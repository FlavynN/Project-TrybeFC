import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Model } from 'sequelize';
import { loginMock, tokenMock, userMock } from './mock/mockLogin';
import Users from '../database/models/Users';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login', () => {
  afterEach(sinon.restore);

  it('Teste de login com sucesso', async () => {

    sinon.stub(Model, 'findOne').resolves(userMock as unknown as Users)
    const httpResponse = await chai.request(app).post('/login').send(loginMock);
    expect(httpResponse.body).to.have.key("token");
    expect(httpResponse.status).to.be.equal(200);
  });

  it('Testa email ou senha informado incorretamente', async () => {
    sinon.stub(Model, 'findOne').resolves(null);
    const httpResponse = await chai.request(app).post('/login').send({
      email: 'jao',
      password: 'jadin',
    });
    expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' });
    expect(httpResponse.status).to.be.equal(401);

  });

  it('Testa se nao for informado senha ou usuario', async () => {
    sinon.stub(Model, 'findOne').resolves(null);
    const httpResponse = await chai.request(app).post('/login').send({
      email: '',
      password: '',
    });
    expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
    expect(httpResponse.status).to.be.equal(400);
  });

  it('Testa se o password tem mais de 6 letras', async () => {
    sinon.stub(Model, 'findOne').resolves(null);
    const httpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'agaz',
    });
    expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' });
    expect(httpResponse.status).to.be.equal(401);

  });
});

describe('GET /login/role', () => {
  afterEach(sinon.restore);

  it('Testa o role do usario incorreto', async () => {
    const httpResponse = await chai
      .request(app)
      .get('/login/role')
      .set('Authorization', "pedra");
    expect(httpResponse.body).to.be.deep.equal({
      "message": "Token must be a valid token"
    });
  });
});
