import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanosDTO } from '../models/planos.dto';
import { PlanosServiceService } from '../service/planos-service.service';

@Component({
  selector: 'app-planos-admin',
  templateUrl: './planos-admin.component.html',
  styleUrls: ['./planos-admin.component.css']
})
export class PlanosAdminComponent implements OnInit {

  p = true;

  planos: PlanosDTO[];

  download: string;

  constructor(private router: Router, private planosService: PlanosServiceService) { }

  ngOnInit() {
    this.planosService.planos().subscribe(data => {
      this.planos = data;
    });
  }

   sair() {
    localStorage.clear();
    this.router.navigate(['login-admin']);
  }

  consultaPlano() {
    if (this.download !== undefined && this.download !== '') {
      this.planosService.planoPorNome(this.download).subscribe(data => {
        this.planos = data;
      });
    } else {
      this.planosService.planos().subscribe(data => {
        this.planos = data;
      });
    }
  }

  deletaPlano(id: number) {
    if (confirm('Deseja Deleta o Plano?')) {

      this.planosService.deletaPlano(id).subscribe(data => {
        console.log('Retorno do metodo delete : ' + data);

        alert('Plano Deletado com sucesso.');

        this.planosService.planos().subscribe(data => {
          this.planos = data;
        });

      });
    }
  }




}
