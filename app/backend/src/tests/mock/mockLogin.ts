export type login = {
  email: string,
  password: string,
}

type user = {
  username: string,
  role: string,
  email: string,
  password: string,
}

export const loginMock: login = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

export const userMock: user = {
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjgxMTQwODIwLCJleHAiOjE2ODExNjYwMjB9.MGoRlKW8e3ltrHlB3mc4CeyVb5SnJ-Z4SBLMADtb3vM"