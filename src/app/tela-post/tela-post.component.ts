import { Component, OnInit } from '@angular/core';
import { PostDTO } from '../models/post.dto';
import { PostServiceService } from '../service/post-service.service';


@Component({
  selector: 'app-tela-post',
  templateUrl: './tela-post.component.html',
  styleUrls: ['./tela-post.component.css']
})
export class TelaPostComponent implements OnInit {

  p = true;

  total = 0;

  items: PostDTO[];

  constructor(private postService: PostServiceService) { }

  ngOnInit() {
    this.postService.get()
    .subscribe(response => {
      this.items = response;
    },
    error => {});
  }

}
