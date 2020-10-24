import { LogradouroDTO } from './logradouro.dto';
import { BairroDTO } from './bairro.dto';
import { PlanosDTO } from './planos.dto';


export interface ClienteDTO {
    id : string;
    nome : string;
    dataNascimento : Date;
    rg : string;
    cpfOuCnpj : string;
    email : string;
    tipo : string;
    formaPagamento : string;
    vencimento : string;
    telefone1 : string;
    telefone2 : string;
    telefone3 : string;

    logradouroId : LogradouroDTO;
    numero : string;
    complemento : string;
    cep : string;

    bairroId : BairroDTO;

    planosId : PlanosDTO;

}