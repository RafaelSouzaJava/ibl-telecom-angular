import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor( private http: HttpClient, private router: Router) { }

  login(usuario) {    
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
      /* Retorno Http */

      var token = JSON.parse(JSON.stringify(data )).Authorization.split(' ')[1];

      localStorage.setItem("token", token);

      this.router.navigate(['administrador']);

      

    },
    error => {
      console.error("Usuario ou Senha errados");
      alert('Usuario ou Senha errados')
    }
    );
  }


  loginAutenticado() {
    if (localStorage.getItem('token') != null 
    && localStorage.getItem('token').toString().trim() != null) {
      return true;
    }else {
      return false;
    }
  }
}
