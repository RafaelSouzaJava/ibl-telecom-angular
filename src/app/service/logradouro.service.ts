import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogradouroDTO } from '../models/logradouro.dto';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LogradouroService {


  constructor(private http: HttpClient) { }

 findAll(id : number) {
   return this.http.get<any>(`${AppConstants.baseBairro}${id}/logradouros`)

  }

}