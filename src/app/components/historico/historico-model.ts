import { Usuario } from "../usuario/Usuario-model";

export class Historico{
    id?: number;
    dthHistorico?: string;
    tipoAcao?: string;
    descricaoAcao?: string;
    ip?: string;
    usuario?: Usuario;
}