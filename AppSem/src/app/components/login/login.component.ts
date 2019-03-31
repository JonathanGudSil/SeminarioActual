import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RegistraseService} from './../../service/registrase.service';
import { registrarseInterface } from './../../models/registrarse.modal';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  displayedColumns: string[] = ['nombres', 'apellidos', 'correo', 'usuario','contraseña'];
  dataSource = new MatTableDataSource<registrarseInterface>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog, private dataRegistrarse: RegistraseService) { }

  private registrarses: registrarseInterface[];

  openDialog() { 
    const dialogRef = this.dialog.open(RegistrarseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

  getListRegistrarse() {
    this.dataRegistrarse.getAllregistrarse()
      .subscribe(registrarse => {
        this.dataSource.data = registrarse;
      });
  }

   onDeleteRegistrarse(id: string): void {
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
          this.dataRegistrarse.deleteRegistrarse(id);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  }

  onPreUpdateRegistrarse(registrarse: registrarseInterface) {
    const dialogRef = this.dialog.open(RegistrarseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
    this.dataRegistrarse.selectedRegistrarse = Object.assign({}, registrarse);
  }

}
