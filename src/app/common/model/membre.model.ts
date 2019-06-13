import { SexeType } from '../../common/types/sexe-type.enum';

export interface MembreItf
{
    // identification
    id: number;
    username: string;
    // donnees privées
    nom: string;
    prenom: string;
    sexe: SexeType;
    date_naissance: Date;
    rue: string;
    numero: string;
    boite: string;
    code_postal: string;
    localite: string;
    num_tel: string;
    num_mobile: string;
    // données club
    matricule: string;
    classt_h: string;
    classt_d: string;
    email: string;
    club_role: string;
    // tracking
    created_at: Date;
    updated_at: Date;
    groupe: string;
    groupe_entr: string;
    comment: string;
    comment_comite: string;
    photo: string;
    num_tel_priv: string;
    deleted_at: Date;
    notify_parents: boolean; 
    // comite
    role: string;
}

export class MembreModel implements MembreItf
{
    constructor(
        // identification
        public id: number,
        public username: string,
        // donnée priv�e
        public nom: string,
        public prenom: string,
        public sexe: SexeType,
        public date_naissance: Date,
        public rue: string,
        public numero: string,
        public boite: string,
        public code_postal: string,
        public localite: string,
        public num_tel: string,
        public num_mobile: string,
        // donnée club
        public matricule: string,
        public classt_h: string,
        public classt_d: string,
        public email: string,
        public club_role: string,
        // tracking
        public created_at: Date,
        public updated_at: Date,
        public groupe: string,
        public groupe_entr: string,
        public comment: string,
        public comment_comite: string,
        public photo: string,
        public num_tel_priv: string,
        public deleted_at: Date,
        public notify_parents: boolean,
        // comite
        public role: string
    )
    {}
}
