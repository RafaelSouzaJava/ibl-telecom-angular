import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDTO } from '../models/usuario.dto';
import { UsuarioService } from '../service/Usuario.service';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  p = true;

  students: UsuarioDTO[];
  nome: string;


  constructor(private router: Router, private usuarioService: UsuarioService) {

  }

  ngOnInit() {

    this.usuarioService.getUsuario().subscribe(data => {
      this.students = data;
    });


  }

   sair() {
    localStorage.clear();
    this.router.navigate(['login-admin']);
  }

  deleteUsuario(id: number) {
    if (confirm('Deseja Deleta o Plano?')) {
      this.usuarioService.deleteUsuario(id).subscribe(data => {

        alert('Plano Deletado com sucesso.');

        this.usuarioService.getUsuario().subscribe( datas => {
          this.students = datas;
        });
      });
    }
  }


  consultarCli() {
    if (this.nome !== undefined && this.nome !== '') {
      this.usuarioService.consultarCli(this.nome).subscribe(data => {
        this.students = data;
      });
    } else {
      this.usuarioService.getUsuario().subscribe(data => {
        this.students = data;
      });
    }

  }

  carregarPagina(pagina) {
    console.log('Pagina -> ' + pagina);
  }

}
