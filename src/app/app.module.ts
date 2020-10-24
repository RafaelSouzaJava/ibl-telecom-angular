import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; /*Requisições Ajax */
import { UsuarioComponent } from './usuario/usuario.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { JogosComponent } from './jogos/jogos.component';

import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanosComponent } from './planos/planos.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { ContatoComponent } from './contato/contato.component';
import { TelaAdministradorComponent } from './tela-administrador/tela-administrador.component'
import { HttpInterceptorModule, HeaderInterceptorService } from './service/header-interceptor.service';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { LogradouroService } from './service/logradouro.service';
import { BairroService } from './service/bairro.service';
import { TelaPostComponent } from './tela-post/tela-post.component';
import { ClienteCadastradosComponent } from './cliente-cadastrados/cliente-cadastrados.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CategoriaService } from './service/categoria.service';
import { PlanosServiceService } from './service/planos-service.service';
import { ClienteService } from './service/cliente.service';
import { LoginServiceService } from './service/login-service.service';
import { PlanosAdminComponent } from './planos-admin/planos-admin.component';
import { PostAdminComponent } from './post-admin/post-admin.component';
import { PlanosAddComponent } from './planos-add/planos-add.component';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';





@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    JogosComponent,
    HomeComponent,
    PlanosComponent,
    InformacaoComponent,
    ContatoComponent,
    TelaAdministradorComponent,
    TelaCadastroComponent,   
    TelaPostComponent,
    ClienteCadastradosComponent,
    TelaLoginComponent,
    PlanosAdminComponent,
    PostAdminComponent,
    PlanosAddComponent,
    UsuarioAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpInterceptorModule,
    ReactiveFormsModule,
    MatTableModule, 
    NgxPaginationModule

  ],
  providers: [
    LogradouroService,
    BairroService,
    CategoriaService,
    PlanosServiceService,
    ClienteService,
    LoginServiceService,
    HeaderInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
