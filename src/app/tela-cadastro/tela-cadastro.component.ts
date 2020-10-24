import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogradouroService } from '../service/logradouro.service';
import { BairroService } from '../service/bairro.service';
import { LogradouroDTO } from '../models/logradouro.dto';
import { BairroDTO } from '../models/bairro.dto';
import { PedidoDTO } from '../models/pedido.dto';
import { ClienteDTO } from '../models/cliente.dto';
import { ClienteService } from '../service/cliente.service';
import { error } from 'util';
import { Router } from '@angular/router';
import { PlanosServiceService } from '../service/planos-service.service';
import { PlanosDTO } from '../models/planos.dto';
import { PagamentoDTO } from '../models/pagamento.dto';
import { VencimentoDTO } from '../models/vencimento.dto';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {

  form: FormGroup;
  logradouros: LogradouroDTO[];
  bairros: BairroDTO;

  pedido: PedidoDTO;
  cliente: ClienteDTO;

  items: PlanosDTO[];  
  
  

  constructor(public formBuilder: FormBuilder, private logradouroService: LogradouroService,
    private bairroService: BairroService,private clientesService: ClienteService, 
    private rota : Router,private planosService: PlanosServiceService) {

    this.form = this.formBuilder.group({    
      
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
      cpfOuCnpj: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      rg: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
      telefone1: ['', Validators.required,],
      telefone2: [''],
      telefone3: [''],
      logradouroId: [null, Validators.required],
      complemento: [''],
      numero: ['', Validators.required],
      cep: [''],
      bairroId: [null, [Validators.required,]],
      tipo :['', Validators.required],
      formaPagamento: ['', Validators.required],
      vencimento: ['', Validators.required],
      planosId: ['', Validators.required]
    });

   
  }

  ngOnInit() {
    this.bairroService.findAll()
      .subscribe(response => {
        this.bairros = response;        
        this.form.controls.bairroId.setValue(this.bairros[0].id);
        this.updateLogradouro(this.bairros[0].id);
        this.form.get('bairroId').valueChanges.subscribe( response => {  
          this.updateLogradouro(response); 
        
        })
        
      },
      error => {" "});    
       
    this.plano();  
    this.updateLogradouro(0);
    
  }

  updateLogradouro(bairros : number) {      
    this.logradouroService.findAll(bairros)    
      .subscribe(response => {
                
        this.logradouros = response;  
        this.form.controls.logradouroId.setValue(this.logradouros[0].id);   
           
      },
      error => {" "});
  }

  plano(){
    this.planosService.planos()
    .subscribe(data => {
      this.items = data;     
    },
    error => {});    
  }  

  signupUser() {    
    
    this.clientesService.salvarCliente(this.form.value)
    .subscribe(data => {          
      console.log(data);
    });
     if (error === null){
      alert("Pedido enviado em breve vai esta recebendo um email de confirmação.");
     }
    this.form.reset(); 
    
  } 

  
  

}
