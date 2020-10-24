import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { UsuarioDTO } from '../models/usuario.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  deleteUsuario(id: Number) : Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id);
  }

  UsuarioSalvar(usuario : UsuarioDTO) {
    return this.http.post<any>(AppConstants.baseUrl, usuario);
  }

  usuarioUpdate(usuario) : Observable<UsuarioDTO> {
    return this.http.put<UsuarioDTO>(AppConstants.baseUrl, usuario);
  }

  usuarioId(id) : Observable<UsuarioDTO> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }

  consultarCli(nome:String) : Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
  }


}
