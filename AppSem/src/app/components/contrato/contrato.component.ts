import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarContratoComponent } from '../contrato/agregar-contrato/agregar-contrato.component';
import { ContratoService } from '../../service/contrato.service';
import { contratoInterface } from '../../models/contrato.modal';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})

export class ContratoComponent implements OnInit {
  displayedColumns: string[] = ['tipo', 'fechai', 'fechaf', 'symbol'];
  dataSource = new MatTableDataSource<contratoInterface>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog, private dataContrato : ContratoService) { }

  private contratos: contratoInterface[];

  openDialog() {
    const dialogRef = this.dialog.open(AgregarContratoComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.getListContrato();
  }

  getListContrato() {
    this.dataContrato.getAllcontrato().subscribe(contrato => {
        this.dataSource.data = contrato;
      });
  }

  onDeleteContrato(id: string): void {
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
        this.dataContrato.deleteContrato(id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
}

onPreUpdateContrato(contrato: contratoInterface) {
  const dialogRef = this.dialog.open(AgregarContratoComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  
  this.dataContrato.selectedContrato = Object.assign({}, contrato);
}

}