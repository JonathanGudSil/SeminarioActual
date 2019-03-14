import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarContratoComponent } from '../agregar-contrato/agregar-contrato.component';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
  displayedColumns: string[] = ['idContrato', 'grupo', 'tipoContrato', 'noInss', 'fechaInicio', 'fechaFin',];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AgregarContratoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  idContrato: number;
  grupo: string;
  tipoContrato: string;
  noInss: number;
  fechaInicio: string;
  fechaFin: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {idContrato: 1, grupo: 'Control de Calidad', tipoContrato: 'Servicio', noInss: 1253, fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idContrato: 2, grupo: 'Medio Ambiente', tipoContrato: 'Servicio', noInss: 5483, fechaInicio: '2019/01/282', fechaFin: '2019/01/28'},
  {idContrato: 3, grupo: 'Seguridad', tipoContrato: 'Servicio', noInss: 8974, fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idContrato: 4, grupo: 'Base de Datos', tipoContrato: 'Servicio', noInss: 4587, fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
  {idContrato: 3, grupo: 'Seguridad', tipoContrato: 'Servicio', noInss: 6358, fechaInicio: '2019/01/28', fechaFin: '2019/01/28'},
];