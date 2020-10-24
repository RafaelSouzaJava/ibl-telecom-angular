import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-administrador',
  templateUrl: './tela-administrador.component.html',
  styleUrls: ['./tela-administrador.component.css']
})
export class TelaAdministradorComponent implements OnInit {

  profiles: string[];

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') == null){
      this.router.navigate(['']);
    }

  }

   sair(){
    localStorage.clear();
    this.router.navigate(['login-admin']);
  }


  public esconderBarrar() {

  }

}
