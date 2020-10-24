import { BairroDTO } from './bairro.dto';

export interface LogradouroDTO {
    id : string,
    logradouro : string
    bairro? : BairroDTO;
}