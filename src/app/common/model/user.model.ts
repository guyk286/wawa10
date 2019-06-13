export interface UserItf
{
    username: string;
    password: string;
    licence: number;
    userid: number;
    role: string;
    truc: string;
    screenName: string;
    isAdmin: boolean;
    isSuperAdmin: boolean;
    // userInfos: UserInfosModel;
}

export class UserModel implements UserItf
{
    constructor(
      public username: string,
      public password: string,
      public licence: number,
      public userid: number,
      public role: string,
      public truc: string,
      public screenName: string,
      public isAdmin: boolean,
      public isSuperAdmin: boolean,
      // public userInfos: UserInfosModel
    )
    {}
  }
