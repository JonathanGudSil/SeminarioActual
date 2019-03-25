import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { DocenteComponent } from './components/docente/docente.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { AgregarCarreraComponent } from './components/carrera/agregar-carrera/agregar-carrera.component';

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
  { path: 'agregar-carrera', component : AgregarCarreraComponent},
  { path: '**', component : InicioComponent },
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

