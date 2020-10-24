import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  title = 'Usuario';

  usuario = {login: '', senha: '', email: ''};



  constructor(private loginService: LoginServiceService, private router: Router) {

  }

  ngOnInit() {
     if (localStorage.getItem('token') != null
     && localStorage.getItem('token').toString().trim() !== null) {
      this.router.navigate(['administrador']);
     }
  }

  public logar(){
    this.loginService.login(this.usuario);
  }

}
