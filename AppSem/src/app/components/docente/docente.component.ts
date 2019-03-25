import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarDocenteComponent } from '../docente/agregar-docente/agregar-docente.component';
import { DocenteService } from '../../service/docente.service';
import { docenteInterface } from '../../models/docente.modal';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  displayedColumns: string[] = ['noInss', 'nombres', 'apellidos', 'telefono','symbol'];
  dataSource = new MatTableDataSource<docenteInterface>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog, private dataDocente: DocenteService) { }

  private docentes: docenteInterface[];

  openDialog() {
    const dialogRef = this.dialog.open(AgregarDocenteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.getListDocentes();
  }

  getListDocentes() {
    this.dataDocente.getAlldocentes()
      .subscribe(docente => {
        this.dataSource.data = docente;
      });
  }

   onDeleteDocente(id: string): void {
    const confirmacion = confirm('Desea Eliminar?');
    if (confirmacion) {
      this.dataDocente.deleteDocente(id);
    }
  }

  onPreUpdateDocente(docente: docenteInterface) {
    const dialogRef = this.dialog.open(AgregarDocenteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
    this.dataDocente.selectedDocente = Object.assign({}, docente);
  }
}



