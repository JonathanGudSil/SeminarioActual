import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RegistraseService} from '../../../service/registrase.service';
import { NgForm, FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {

  constructor(public dialog:MatDialog,public dataApi:RegistraseService) { }

  onGuardarRegistrarse(formRegistrarse: NgForm): void {
    if (formRegistrarse.valid)
    {
    if (formRegistrarse.value.id == null) {
      this.dataApi.addRegistrarse(formRegistrarse.value);
      Swal.fire(
        'Registrado!',
        'You clicked the button!',
        'success'
      )
    } else {
      this.dataApi.updateRegistrarse(formRegistrarse.value);
      Swal.fire(
        'Actualizado!',
        'You clicked the button!',
        'success'
      )
    }
    formRegistrarse.resetForm();
    this.dialog.closeAll();
  }
}

resetForm(formRegistrarse?:NgForm)  
  {
    if (formRegistrarse != null)
    formRegistrarse.resetForm();
    this.dataApi.selectedRegistrarse ={
  id: null,
  nombres: '',
  apellidos: '',
  correo: '',
  usuario: '',
  contrasena: '',
}
}

  ngOnInit() {
  }

}
