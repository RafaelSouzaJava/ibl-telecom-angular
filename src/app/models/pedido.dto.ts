import { ClienteDTO } from './cliente.dto';

import { PlanosDTO } from './planos.dto';
import { PagamentoDTO } from './pagamento.dto';
import { VencimentoDTO } from './vencimento.dto';

export interface PedidoDTO {    
    formaVencimento : VencimentoDTO,
    formaPagamento : PagamentoDTO,
    cliente : ClienteDTO,    
    itensPlano : PlanosDTO
}