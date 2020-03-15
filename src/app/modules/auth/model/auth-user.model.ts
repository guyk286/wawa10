import { AuthUserGroupModel } from './auth-user-group.model';

export class AuthUserModel {
    id: number;
    username: string;
    nom: string;
    prenom: string;
    email: string;
    password: string;
    mustChangePassword: boolean;
    changePasswordJeton: string;
    enabled: boolean;
    authUserGroup: AuthUserGroupModel;
}
