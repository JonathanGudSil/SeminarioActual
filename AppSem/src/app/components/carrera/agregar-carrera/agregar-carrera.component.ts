import { Component, OnInit,Input } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CarreraService} from './../../../service/carrera.service';
import { NgForm, FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-carrera',
  templateUrl: './agregar-carrera.component.html',
  styleUrls: ['./agregar-carrera.component.css']
})
export class AgregarCarreraComponent implements OnInit {

  constructor(public dialog:MatDialog,public dataApi:CarreraService) { }

  onGuardarCarrera(formCarrera: NgForm): void {
    if (formCarrera.valid)
    {
    if (formCarrera.value.id == null) {
      this.dataApi.addCarrera(formCarrera.value);
      Swal.fire(
        'Operación Exitosa!',
        'Sus datos han sido guardado',
        'success'
      )
    } else {
      this.dataApi.updateCarrera(formCarrera.value);
      Swal.fire(
        'Operación Exitosa!',
        'Sus datos han sido actualizados!',
        'success'
      )
    }
    formCarrera.resetForm();
    this.dialog.closeAll();
  }
}

resetForm(formCarrera?:NgForm)  
  {
    if (formCarrera != null)
    formCarrera.resetForm();
    this.dataApi.selectedCarrera ={
  id: null,
  position: '',
  name: '',
}
}

  ngOnInit() {
  }
}
