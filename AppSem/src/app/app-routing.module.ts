import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarreraComponent } from './carrera/carrera.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { ContratoComponent } from './contrato/contrato.component';
import { DocenteComponent } from './docente/docente.component';
import { GrupoComponent } from './grupo/grupo.component';
import { ModuloComponent } from './modulo/modulo.component';

const routes: Routes = [
  { path: '', component : LoginComponent },
  { path: 'login', component : LoginComponent },
  { path: 'contacto', component : ContactoComponent },
  { path: 'inicio', component : InicioComponent },
  { path: 'carrera', component : CarreraComponent },
  { path: 'asistencia', component : AsistenciaComponent },
  { path: 'contrato', component : ContratoComponent},
  { path: 'docente', component : DocenteComponent},
  { path: 'grupo', component : GrupoComponent},
  { path: 'modulo', component : ModuloComponent},
  { path: '**', component : InicioComponent },
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

