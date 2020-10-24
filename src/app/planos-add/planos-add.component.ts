import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlanosServiceService } from '../service/planos-service.service';
import { PlanosDTO } from '../models/planos.dto';

@Component({
  selector: 'app-planos-add',
  templateUrl: './planos-add.component.html',
  styleUrls: ['./planos-add.component.css']
})
export class PlanosAddComponent implements OnInit {



  planos = new PlanosDTO;

  constructor(private routeActive: ActivatedRoute,
    private planoService: PlanosServiceService) {



  }

  ngOnInit() {
    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.planoService.getPlanos(id).subscribe(data => {
        this.planos = data;
      })

    }
  }

  salvarPlano() {
    if (this.planos.id != null && this.planos.id.toString().trim() != null) { /* Atualizando ou Editando */
      this.planoService.planoUpdate(this.planos).subscribe(data => {        
        alert("Plano Atualizado.")
        this.novo();
      })

    } else {
      this.planoService.planoSalvar(this.planos).subscribe(data => { /* Salvando um novo plano */
       alert("Plano Salvo.")
        this.novo();
       
      })
    }
  }

  novo() {
    this.planos = new PlanosDTO();
  }

}
