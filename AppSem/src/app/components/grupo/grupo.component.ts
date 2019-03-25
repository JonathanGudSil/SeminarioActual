import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarGrupoComponent } from '../grupo/agregar-grupo/agregar-grupo.component';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  displayedColumns: string[] = ['idGrupo', 'modulo', 'carrera', 'turno', 'fechaInicio', 'fechaFin'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AgregarGrupoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
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

const ELEMENT_DATA: PeriodicElement[] = [
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
];