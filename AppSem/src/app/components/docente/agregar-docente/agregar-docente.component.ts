import { Component, OnInit,Input } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DocenteService} from './../../../service/docente.service';
import { NgForm, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})  
export class AgregarDocenteComponent implements OnInit {

  constructor(public dialog:MatDialog,private dataApi:DocenteService) { }

  onGuardarDocente(formDocente: NgForm): void {
    if (formDocente.valid)
    {
    if (formDocente.value.id == null) {
      this.dataApi.addDocente(formDocente.value);
    } else {
      this.dataApi.updateDocente(formDocente.value);
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
