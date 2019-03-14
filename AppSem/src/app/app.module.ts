import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MynavComponent } from './mynav/mynav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CarreraComponent } from './carrera/carrera.component';
import { ContratoComponent } from './contrato/contrato.component';
import { DocenteComponent } from './docente/docente.component';
import { GrupoComponent } from './grupo/grupo.component';
import { ModuloComponent } from './modulo/modulo.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { AgregarCarreraComponent} from './agregar-carrera/agregar-carrera.component';
import { from } from 'rxjs';
import {MatDialogModule} from '@angular/material/dialog';
import { AgregarAsistenciaComponent } from './agregar-asistencia/agregar-asistencia.component';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AgregarDocenteComponent } from './agregar-docente/agregar-docente.component';
import { AgregarGrupoComponent } from './agregar-grupo/agregar-grupo.component';
import { AgregarContratoComponent } from './agregar-contrato/agregar-contrato.component';


@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    LoginComponent,
    InicioComponent,
    ContactoComponent,
    CarreraComponent,
    ContratoComponent,
    DocenteComponent,
    GrupoComponent,
    ModuloComponent,
    AsistenciaComponent,
    AgregarCarreraComponent,
    AgregarAsistenciaComponent,
    AgregarDocenteComponent,
    AgregarGrupoComponent,
    AgregarContratoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AgregarCarreraComponent, 
    CarreraComponent, 
    AgregarAsistenciaComponent, 
    AsistenciaComponent, 
    AgregarDocenteComponent, 
    DocenteComponent, 
    AgregarGrupoComponent, 
    GrupoComponent,
    AgregarContratoComponent,
    ContratoComponent,
  ],
})

export class AppModule { }
