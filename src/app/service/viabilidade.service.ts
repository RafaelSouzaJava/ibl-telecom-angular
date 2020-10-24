import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViabilidadeDTO } from '../models/viabilidade.dto';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class ViabilidadeService {

  constructor(private http: HttpClient) { }


  viabilidadePost(viabilidade : ViabilidadeDTO) {
    return this.http.post(AppConstants.baseViabilidade, viabilidade);
  }

}
