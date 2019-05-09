import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GrupoService } from '../../../service/grupo.service';
import {grupoInterface} from '../../../models/grupo.modal';
import { NgForm, FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-asistencia',
  templateUrl: './agregar-asistencia.component.html',
  styleUrls: ['./agregar-asistencia.component.css']
})
export class AgregarAsistenciaComponent implements OnInit {

  constructor(public dialog:MatDialog,public dataApi:GrupoService) { }

  ngOnInit() {
  }


  onGuardarAsistencia(formGrupo: NgForm): void{
    if (formGrupo.valid){
      if (formGrupo.value.id != null){
        this.dataApi.updateGrupo(formGrupo.value);
        Swal.fire(
          'Operación Exitosa!',
          'Sus datos han sido actualizados!',
          'success'
        );
        formGrupo.resetForm();
        this.dialog.closeAll();
      }
    }
  }

}
