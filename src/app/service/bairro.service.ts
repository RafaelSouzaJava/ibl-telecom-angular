import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BairroDTO } from '../models/bairro.dto';
import { AppConstants } from '../app-constants';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class BairroService {
  
  constructor(private http: HttpClient, ) { }

 findAll() : Observable<BairroDTO>{
   return this.http.get<BairroDTO>(`${AppConstants.baseBairro}`)
  
  }

  bairroId(id) : Observable<BairroDTO> {
    return this.http.get<BairroDTO>(`${AppConstants.baseBairro}${id}`);
  }
  

}