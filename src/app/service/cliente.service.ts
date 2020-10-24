import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { ClienteDTO } from '../models/cliente.dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http: HttpClient) { }

 salvarCliente(cliente : ClienteDTO) {
   return this.http.post(AppConstants.baseCliente, cliente);
  }

  cliente() : Observable<ClienteDTO>{
    return this.http.get<ClienteDTO>(AppConstants.baseCliente);
 
   }

  findById(id : string) {
    return this.http.get(`${AppConstants.baseCliente}/${id}`);
  }

  


}