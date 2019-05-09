import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ContratoService} from './../../../service/contrato.service';
import { NgForm, FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-contrato',
  templateUrl: './agregar-contrato.component.html',
  styleUrls: ['./agregar-contrato.component.css']
})
export class AgregarContratoComponent implements OnInit {

  constructor(public dialog:MatDialog,public dataApi:ContratoService) { }

  onGuardarContrato(formContrato: NgForm): void {
    if (formContrato.valid)
    {
    if (formContrato.value.id == null) {
      this.dataApi.addContrato(formContrato.value);
      Swal.fire(
        'Registrado!',
        '¡El registro se ha guardado con exito!',
        'success'
      )
    } else {
      this.dataApi.updateContrato(formContrato.value);
      Swal.fire(
        'Actualizado!',
        '¡El registro se ha actualizado con exito!',
        'success'
      )
    }
    formContrato.resetForm();
    this.dialog.closeAll();
  }
}

resetForm(formContrato?:NgForm)  
  {
    if (formContrato != null)
    formContrato.resetForm();
    this.dataApi.selectedContrato ={
  id: null, 
    tipo: '',
    fechai: '',
    fechaf: '',
}

}

  ngOnInit() {
  }

}
