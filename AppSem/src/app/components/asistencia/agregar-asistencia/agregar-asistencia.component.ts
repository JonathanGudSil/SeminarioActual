import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AsistenciaService } from '../../../service/asistencia.service';
import { GrupoService } from '../../../service/grupo.service';
import {grupoInterface} from '../../../models/grupo.modal';
import { NgForm, FormsModule} from '@angular/forms';
import Swal from 'sweetalert2';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { docenteInterface } from 'src/app/models/docente.modal';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-agregar-asistencia',
  templateUrl: './agregar-asistencia.component.html',
  styleUrls: ['./agregar-asistencia.component.css']
})
export class AgregarAsistenciaComponent implements OnInit {

  public date: any;
  public modulo2: string;
  constructor(public dialog:MatDialog,public dataApi:AsistenciaService, public grupoService: GrupoService) { 
    
    this.grupo = null;
    this.grupoService.getAllGrupoDocente(localStorage.getItem('mail')).subscribe(grupos =>{
      this.grupo = grupos;
    })


  }
  public GrupoCollection: AngularFirestoreCollection<grupoInterface>
  public grupo: docenteInterface[];
  ngOnInit() {
  }

  smodulo():void{
    console.log(this.modulo2);
    this.dataApi.selectedGrupo.modulo = this.modulo2;
  }
  onGuardarAsistencia(formGrupo: NgForm): void{
    if (formGrupo.valid){
      if (formGrupo.value.id == null){
        this.dataApi.addAsistencia(formGrupo.value);
        Swal.fire(
          'Operación Exitosa!',
          'Sus datos han sido actualizados!',
          'success'
        );
        
      }else{
        this.dataApi.updateAsistencia(formGrupo.value);
        Swal.fire(
          'Operación Exitosa!',
          'Sus datos han sido actualizados!',
          'success'
        )
      }
      formGrupo.resetForm();
        this.dialog.closeAll();
    }
  }

}
