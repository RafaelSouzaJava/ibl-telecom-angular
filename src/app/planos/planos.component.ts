import { Component, OnInit, enableProdMode } from '@angular/core';
import { PlanosServiceService } from '../service/planos-service.service';
import { PlanosDTO } from '../models/planos.dto';
import { error } from '@angular/compiler/src/util';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';





@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {

  bucketUrl: string = AppConstants.bucketBaseUrl;

  planos: PlanosDTO[];


  constructor(private planosService: PlanosServiceService, private router: Router) { }

  ngOnInit() {
    this.planosService.planos().subscribe(data => {
      this.planos = data;
    });

  }

  cadastra() {
      this.router.navigate(['cadastro']);
  }
}
