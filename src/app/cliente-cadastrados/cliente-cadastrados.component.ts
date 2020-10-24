import { Component, OnInit } from '@angular/core';
import { ClienteCadastradoService } from '../service/cliente-cadastrado.service';
import { Observable } from 'rxjs';
import { ClienteCadastradosDTO } from '../models/cliente.cadastrados.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-cadastrados',
  templateUrl: './cliente-cadastrados.component.html',
  styleUrls: ['./cliente-cadastrados.component.css']
})
export class ClienteCadastradosComponent implements OnInit {

  students: ClienteCadastradosDTO[];

  nome: String;
  total: number;
  p: number;

  constructor(private clientesCadastradosService: ClienteCadastradoService, private router: Router) { }

  ngOnInit() {
    this.clientesCadastradosService.getclientes().subscribe(data => {
      this.students = data;
    });


  }

   sair() {
    localStorage.clear();
    this.router.navigate(['login-admin']);
  }

  consultarCli() {
    if (this.nome !== undefined && this.nome !== '') {
      this.clientesCadastradosService.consultarCli(this.nome).subscribe(data => {
        this.students = data;
      });
    } else {
      this.clientesCadastradosService.getclientes().subscribe(data => {
        this.students = data;
      });
    }

  }



}
