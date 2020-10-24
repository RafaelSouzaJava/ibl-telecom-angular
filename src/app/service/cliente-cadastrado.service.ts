import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class ClienteCadastradoService {

  constructor(private http: HttpClient) { }

  getclientes(): Observable<any> {
    return this.http.get<any>(AppConstants.baseCliente);
  }

  consultarCli(nome:String) : Observable<any> {
    return this.http.get(AppConstants.baseCliente + "usuarioPorNome/" + nome);
  }

  consultarUserPoPage(nome: String, page : Number): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome + "/page/" + page);

  }

  getStudentListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + 'page/' + pagina);
  }


}

