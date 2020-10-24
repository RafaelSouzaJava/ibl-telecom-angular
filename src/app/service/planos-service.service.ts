import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanosDTO } from '../models/planos.dto';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class PlanosServiceService {

  constructor(private http: HttpClient) { }

 planos() : Observable<PlanosDTO[]>{
   return this.http.get<PlanosDTO[]>(AppConstants.basePlanos)

  }

  planoId(id) : Observable<PlanosDTO>{
    return this.http.get<PlanosDTO>(`${AppConstants.basePlanos}${id}`);
  }

  planoPorNome(download : String) : Observable<any> {
    return this.http.get(AppConstants.basePlanos + "planoPorNome/" + download);
  }

  deletaPlano(id: Number) : Observable<any> {
    return this.http.delete(AppConstants.basePlanos + id);
  }

  planoSalvar(plano : PlanosDTO) {
    return this.http.post<any>(AppConstants.basePlanos, plano);
  }

  planoUpdate(plano) : Observable<PlanosDTO> {
    return this.http.put<PlanosDTO>(AppConstants.basePlanos, plano);
  }

  getPlanos(id) : Observable<any> {
    return this.http.get<any>(AppConstants.basePlanos + id);
  }

  
}
