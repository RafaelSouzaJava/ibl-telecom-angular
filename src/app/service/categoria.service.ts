import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { CategoriaDTO } from '../models/categoria.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(AppConstants.baseServidor + "categorias");
  }
}
