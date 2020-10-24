import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlanosDTO } from '../models/planos.dto';
import { PlanosServiceService } from '../service/planos-service.service';
import { Router } from '@angular/router';
import { AppConstants } from '../app-constants';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaDTO } from '../models/categoria.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViabilidadeService } from '../service/viabilidade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bucketUrl: string = AppConstants.bucketBaseUrl;

  plano1: PlanosDTO;

  plano2: PlanosDTO;

  plano3: PlanosDTO;

  plano4: PlanosDTO;

  plano5: PlanosDTO;

  categorias: CategoriaDTO[];

  form: FormGroup;



  constructor(private planosService : PlanosServiceService, private router : Router,
     public formBuilder: FormBuilder, private viabilidadeService: ViabilidadeService) {

      this.form = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80)]],
        email: ['', [Validators.required, Validators.email]],
        endereco: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        telefone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(12)]],
        telefone2: ['', [Validators.minLength(9), Validators.maxLength(12)]],
        bairro: ['', [Validators.required]],
        cep: ['']

      });

     }

  ngOnInit() {
  this.getPlano40Megas();
  this.getPlano50Megas();
  this.getPlano100Megas();
  this.getPlano150Megas();
  this.getPlano200Megas();
  }

  getPlano40Megas() {
    this.planosService.planoId('1')
    .subscribe( data => {
      this.plano1 = data;
    },
    error => {
    });
    }

  getPlano50Megas() {
    this.planosService.planoId('2')
    .subscribe( data => {
      this.plano2 = data;
        },
    error => {
      console.log(error);
    });
  }

  getPlano100Megas() {
    this.planosService.planoId('3')
    .subscribe( data => {
      this.plano3 = data;
    },
    error => {
      console.log(error);
    });
  }

  getPlano150Megas() {
    this.planosService.planoId('4')
    .subscribe( data => {
      this.plano4 = data;
    },
    error => {
      console.log(error);
    });
  }

  getPlano200Megas() {
    this.planosService.planoId('5')
    .subscribe( data => {
      this.plano5 = data;
    },
    error => {
      console.log(error);
    });
  }


  // tslint:disable-next-line: member-ordering
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

   cadastra() {
    this.router.navigate(['cadastro']);
  }

  signupUser() {
    this.viabilidadeService.viabilidadePost(this.form.value)
    .subscribe(data => {
      },
    error => {});
    alert('Pedido enviado em breve vai esta recebendo um email de confirmação.');
    this.form.reset();
  }



}



