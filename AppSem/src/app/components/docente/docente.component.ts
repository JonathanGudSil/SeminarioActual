import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarDocenteComponent } from '../docente/agregar-docente/agregar-docente.component';
import { DocenteService } from '../../service/docente.service';
import { docenteInterface } from '../../models/docente.modal';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})

export class DocenteComponent implements OnInit {
  displayedColumns: string[] = ['noInss', 'nombres', 'apellidos', 'telefono', 'contrato','symbol'];
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
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.dataDocente.deleteDocente(id);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  }

  onPreUpdateDocente(docente: docenteInterface) {
    const dialogRef = this.dialog.open(AgregarDocenteComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
    this.dataDocente.selectedDocente = Object.assign({}, docente);
  }
}



