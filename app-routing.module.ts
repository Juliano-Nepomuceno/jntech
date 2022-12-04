import { EditarservicosComponent } from './servicoesprestados/atualizarservicos/editarservicos/editarservicos.component';
import { UsuarioGuard } from './guards/usuario.guard';
import { LoginComponent } from './home/login/login.component';
import { AtualizarServicosComponent } from './servicoesprestados/atualizarservicos/atualizar-servicos/atualizar-servicos.component';
import { AdicionarservicosComponent } from './servicoesprestados/adicionarservicos/adicionarservicos/adicionarservicos.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListarservicosComponent } from './servicoesprestados/listarservicoes/listarservicos/listarservicos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { Servicos } from './servicoesprestados/servicos';
import { HomeComponent } from './home/home/home.component';
import { ServicosprestadosComponent } from './servicoesprestados/servicosprestados/servicosprestados.component';
import { LogarComponent } from './logar/logar/logar.component';
import { ListarporidComponent } from './servicoesprestados/listarservicoes/listarporid/listarporid.component';
import { FuncionarioRoutingModule } from './Funcionario/funcionario/funcionario-routing.module';
import { ClientesRoutingModule } from './Clientes/clientes/clientes-routing.module';
import { AgendamentoModule } from './Agendamento/agendamento/agendamento.module';
import { UsuariosRoutingModule } from './Usuarios/usuarios/usuarios-routing.module';
const routes: Routes = [
  {path:'login', component: LogarComponent},
  {path:'home', component:HomeComponent },
  {path: 'servicosprestados', component: ServicosprestadosComponent,  
  children: [
    {path: 'editarservicos', component: EditarservicosComponent},
    {path: 'listarporid' , component: ListarporidComponent},
    {path: 'adicionarservicos', component: AdicionarservicosComponent},
    {path: 'listarservicos' , component: ListarservicosComponent, 
    
    children:[
    {path: 'atualizar/:id' , component: AtualizarServicosComponent},
    {path: ':id' , component: AtualizarServicosComponent},
    ]
  },
    
   
   ]},
   {path: '', component: HomeComponent},
];

@NgModule({
  imports: [
    
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
