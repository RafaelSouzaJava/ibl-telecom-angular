import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SenhaService {

  constructor( private http: HttpClient) { }

  senha(email) {    
    return this.http.post(AppConstants.baseRecSenha, JSON.stringify(email)).subscribe(data => {
      /* Retorno Http */
       

    },
    error => {
      console.error("Usuario ou Senha errados");
    }
    );
  }
}
