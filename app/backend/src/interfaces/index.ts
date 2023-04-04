export interface ITeam {
  id?: number;
  teamName: string;
}

export interface IUser {
  id?: number;
  role: string;
  email: string;
  password: string;

}

export interface ILogin {
  email: string;
  password: string;
}
