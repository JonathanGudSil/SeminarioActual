import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarDocenteComponent } from '../agregar-docente/agregar-docente.component';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  displayedColumns: string[] = ['noInss', 'name', 'telefono', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(AgregarDocenteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  noInss: number;
  telefono: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {noInss: 1, name: 'Jonathan Gudiel Silva', telefono: 85177228, symbol: ''},
  {noInss: 2, name: 'Maryury Guzman Diaz', telefono: 83547255, symbol: ''},
  {noInss: 3, name: 'Amy Urbina Olivar', telefono: 57725477, symbol: ''},
  {noInss: 4, name: 'Jose Lopez Garcia', telefono: 89182234, symbol: ''},
];
