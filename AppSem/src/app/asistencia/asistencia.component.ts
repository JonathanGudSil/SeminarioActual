import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarAsistenciaComponent } from '../agregar-asistencia/agregar-asistencia.component';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  displayedColumns: string[] = ['position', 'totmuj', 'totvar', 'total', 'observacion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AgregarAsistenciaComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }
}

export interface PeriodicElement {
  position: number;
  totmuj: number;
  totvar: number;
  total: number;
  observacion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, totmuj: 25, totvar: 13, total: 38, observacion:"No llego nadie" },
  {position: 2, totmuj: 25, totvar: 13, total: 38, observacion:"No llego nadie" },
  {position: 3, totmuj: 25, totvar: 13, total: 38, observacion:"No llego nadie"},
  {position: 4, totmuj: 25, totvar: 13, total: 38, observacion:"No llego nadie" },
  {position: 5, totmuj: 25, totvar: 13, total: 38, observacion:"No llego nadie" },
  {position: 6, totmuj: 25, totvar: 13, total: 38, observacion:"No llego nadie" },
];