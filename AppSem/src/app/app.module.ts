import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MynavComponent } from './components/mynav/mynav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CarreraComponent } from './components/carrera/carrera.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { DocenteComponent } from './components/docente/docente.component';
import { GrupoComponent } from './components/grupo/grupo.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { AgregarCarreraComponent} from './components/carrera/agregar-carrera/agregar-carrera.component';
import { from } from 'rxjs';
import {MatDialogModule} from '@angular/material/dialog';
import { AgregarAsistenciaComponent } from './components/asistencia/agregar-asistencia/agregar-asistencia.component';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AgregarDocenteComponent } from './components/docente/agregar-docente/agregar-docente.component';
import { AgregarGrupoComponent } from './components/grupo/agregar-grupo/agregar-grupo.component';
import { AgregarContratoComponent } from './components/contrato/agregar-contrato/agregar-contrato.component';

import {AngularFirestoreModule} from '@angular/fire/firestore';
import { RegistrarseComponent } from './components/login/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    LoginComponent,
    InicioComponent,
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
    RegistrarseComponent,
    
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
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule
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
    RegistrarseComponent,
  ],
})

export class AppModule { }
