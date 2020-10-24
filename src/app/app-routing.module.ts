import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JogosComponent } from './jogos/jogos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { PlanosComponent } from './planos/planos.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { ContatoComponent } from './contato/contato.component';
import { TelaAdministradorComponent } from './tela-administrador/tela-administrador.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaPostComponent } from './tela-post/tela-post.component';
import { ClienteCadastradosComponent } from './cliente-cadastrados/cliente-cadastrados.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { PlanosAdminComponent } from './planos-admin/planos-admin.component';
import { PostAdminComponent } from './post-admin/post-admin.component';
import { PlanosAddComponent } from './planos-add/planos-add.component';
import { GuardiaoGuard } from './service/guardiao.guard';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';


const routes: Routes = [ 
  {path : '', component: HomeComponent},
  {path : 'jogos', component: JogosComponent},
  {path : 'cadastro', component: TelaCadastroComponent},  
  {path : 'login-admin', component: TelaLoginComponent}, 
  {path : 'planos', component: PlanosComponent},
  {path : 'informacao', component: InformacaoComponent},
  {path : 'contatos', component: ContatoComponent},
  {path : 'administrador', component: TelaAdministradorComponent, canActivate: [GuardiaoGuard]},
  {path : 'manutencao', component: TelaPostComponent},
  {path : 'clienteCadastrados', component: ClienteCadastradosComponent, canActivate: [GuardiaoGuard]},
  {path : 'usuarios', component: UsuarioComponent, canActivate: [GuardiaoGuard]},
  {path : 'usuarioAdd', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]},
  {path : 'usuarioAdd/:id', component: UsuarioAddComponent, canActivate: [GuardiaoGuard]},
  {path : 'planosadmin', component: PlanosAdminComponent, canActivate: [GuardiaoGuard]},
  {path : 'postadmin', component: PostAdminComponent, canActivate: [GuardiaoGuard]},
  {path : 'planoAdd', component: PlanosAddComponent, canActivate: [GuardiaoGuard]},
  {path : 'planoAdd/:id', component: PlanosAddComponent, canActivate: [GuardiaoGuard]},
  {path : '**', component: HomeComponent}, 
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
