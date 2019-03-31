import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarCarreraComponent } from '../carrera/agregar-carrera/agregar-carrera.component';
import { CarreraService } from '../../service/carrera.service';
import { carreraInterface } from '../../models/carrera.modal';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})

export class CarreraComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = new MatTableDataSource<carreraInterface>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog, private dataCarrera: CarreraService) { }

  private carreras: carreraInterface[];

openDialog() {
  const dialogRef = this.dialog.open(AgregarCarreraComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

  ngOnInit() {
    this.getListCarreras();
  }

  getListCarreras() {
    this.dataCarrera.getAllcarreras()
      .subscribe(carrera => {
        this.dataSource.data = carrera;
      });
  }

  onDeleteCarrera(id: string): void {
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
        this.dataCarrera.deleteCarrera(id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
}

onPreUpdateCarrera(carrera: carreraInterface) {
  const dialogRef = this.dialog.open(AgregarCarreraComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  
  this.dataCarrera.selectedCarrera = Object.assign({}, carrera);
}

}
