import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';
import { PostDTO } from '../models/post.dto';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

 get() : Observable<PostDTO[]>{
   return this.http.get<PostDTO[]>(AppConstants.basePost);

  }

  post(manutencao: PostDTO) {
    return this.http.post(AppConstants.basePost, manutencao);
  } 

  deletaPost(id: Number) {
    return this.http.delete(AppConstants.basePost + id);
  }
 

  
}
