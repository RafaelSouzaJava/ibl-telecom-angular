import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UsuarioDTO } from '../models/usuario.dto';
import { UsuarioService } from '../service/Usuario.service';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new UsuarioDTO();

  constructor(private routeActive: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.usuarioService.usuarioId(id).subscribe( data => {
        this.usuario = data;
      });
    }
  }

  salvarUsuario() {
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) { /* Atualizando ou editando */
      this.usuarioService.usuarioUpdate(this.usuario).subscribe( data => {
        console.log('Usuario Atualizado!');
        alert('Usuario' + this.usuario.nome + ' Atualizado');
        this.novo();
      });

    } else {
      this.usuarioService.UsuarioSalvar(this.usuario).subscribe( data => { /* salvando um novo usuario */
        console.log('usuario salvo!');
        alert('Usuario ' + this.usuario.nome + ' salvo');
        this.novo();
      })
    }
  }

  novo() {
    this.usuario = new UsuarioDTO();
  }

}
