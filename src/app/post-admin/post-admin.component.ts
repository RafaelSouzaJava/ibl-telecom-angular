import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostServiceService } from '../service/post-service.service';
import { PostDTO } from '../models/post.dto';

type NewType = number;

@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.css']
})
export class PostAdminComponent implements OnInit {

  p = false;

  form: FormGroup;
  items: PostDTO[];

  constructor(private router: Router, private formBuilder: FormBuilder, private postService: PostServiceService) {

    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
      autor: ['', [Validators.required]],
      texto: ['', [Validators.required]]

    });


  }

  ngOnInit() {
    this.postService.get()
      .subscribe(response => {
        this.items = response;
      },
        error => { });

  }

   sair() {
    localStorage.clear();
    this.router.navigate(['login-admin']);
  }

  signupUser() {

    this.postService.post(this.form.value)
      .subscribe(data => {

      },
        error => { console.log( error );
        });
    alert('Post de manutenção enviado.');
  }

  deletaPost(id: NewType) {
    if (confirm('Deseja Deleta o Post?')) {
      this.postService.deletaPost(id).subscribe( data => {
        alert('Post deletado com sucesso');

        this.postService.get()
      .subscribe(response => {
        this.items = response;
      },
        error => { });

      });
    }
  }

}
