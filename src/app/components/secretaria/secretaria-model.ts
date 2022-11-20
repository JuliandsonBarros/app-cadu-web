import { Usuario } from "../usuario/Usuario-model"

export class Secretaria {
    id_secretaria?: number
    nom_secretaria?: string
    nom_endereco?: string
    cod_telefone?: string
    sta_secretaria?: string ='A'
    usuario?: Usuario;
    des_observacao?: string
}