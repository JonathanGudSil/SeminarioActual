import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarCarreraComponent } from '../carrera/agregar-carrera/agregar-carrera.component';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Tecnico en Computacion'},
  {position: 2, name: 'Contabilidad' },
  {position: 3, name: 'Administracion de Empresa'},
  {position: 4, name: 'Belleza'},
  {position: 5, name: 'Costura'},
  {position: 6, name: 'Cocina'},
  {position: 7, name: 'Metalurgica'},
];

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})

export class CarreraComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog) { }

openDialog() {
  const dialogRef = this.dialog.open(AgregarCarreraComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

  ngOnInit() {
  }
}

