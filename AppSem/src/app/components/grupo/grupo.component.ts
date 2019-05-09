import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarGrupoComponent } from '../grupo/agregar-grupo/agregar-grupo.component';
import { GrupoService } from '../../service/grupo.service';
import {grupoInterface} from '../../models/grupo.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  displayedColumns: string[] = ['docente', 'modulo', 'carrera', 'turno', 'fecha_inicio', 'fecha_fin','symbol'];
  dataSource = new MatTableDataSource<grupoInterface>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  constructor(public dialog: MatDialog, public dataGrupo: GrupoService,private router: Router) { 


    if (localStorage.getItem('rol') == null || localStorage.getItem('rol') == ''){
      this.router.navigate(['/login']);
    }



  }

  getListGrupo(){
    this.dataGrupo.getAllGrupo().subscribe(
      grupo => {
        this.dataSource.data = grupo;
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(AgregarGrupoComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.getListGrupo();
  }

}

export interface PeriodicElement {
  idGrupo: number;
  modulo: string;
  carrera: string;
  turno: string;
  fechaInicio: string;
  fechaFin: string;
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  {idGrupo: 1, modulo: 'Control de Calidad', carrera: 'Administracion', turno: 'Vespertino', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 2, modulo: 'Medio Ambiente', carrera: 'Secretaria', turno: 'Vespertino', fechaInicio: '2019/01/282', fechaFin: '2019/01/28'},
  {idGrupo: 3, modulo: 'Seguridad', carrera: 'Administracion', turno: 'Matutino', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 4, modulo: 'Base de Datos', carrera: 'Programacion', turno: 'Vespertino', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 3, modulo: 'Seguridad', carrera: 'Administracion', turno: 'Matutino', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 3, modulo: 'Seguridad', carrera: 'Administracion', turno: 'Matutino', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 5, modulo: 'Programacion I', carrera: 'Programacion ', turno: 'Nocturno', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 6, modulo: 'Office', carrera: 'Computacion', turno: 'Nocturno', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 7, modulo: 'Contabilidad I', carrera: 'Administracion', turno: 'Vespertino', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 8, modulo: 'Finanzas', carrera: 'Contabilidad', turno: 'matutino', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 9, modulo: 'Español', carrera: 'Administracion', turno: 'Vespertino', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idGrupo: 10, modulo: 'Matematica', carrera: 'Administracion', turno: 'Nocturno', fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
];*/