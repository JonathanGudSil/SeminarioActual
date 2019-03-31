import { Component, OnInit,Input } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DocenteService} from './../../../service/docente.service';
import { NgForm, FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})  

export class AgregarDocenteComponent implements OnInit {

  constructor(public dialog:MatDialog,public dataApi:DocenteService) { }

  onGuardarDocente(formDocente: NgForm): void {
    if (formDocente.valid)
    {
    if (formDocente.value.id == null) {
      this.dataApi.addDocente(formDocente.value);
      Swal.fire(
        'Registrado!',
        'You clicked the button!',
        'success'
      )
    } else {
      this.dataApi.updateDocente(formDocente.value);
      Swal.fire(
        'Actualizado!',
        'You clicked the button!',
        'success'
      )
    }
    formDocente.resetForm();
    this.dialog.closeAll();
  }
}

resetForm(formDocente?:NgForm)  
  {
    if (formDocente != null)
    formDocente.resetForm();
    this.dataApi.selectedDocente ={
  id: null,
  noInss: '',
  nombres: '',
  apellidos: '',
  telefono: '',
}
}

  ngOnInit() {
  }

}
