import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import { docenteInterface } from '../../../models/docente.modal';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DocenteService } from '../../../service/docente.service';
import { GrupoService } from '../../../service/grupo.service';
import { carreraInterface } from '../../../models/carrera.modal';
import { CarreraService } from 'src/app/service/carrera.service';
import { NgForm, FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-grupo',
  templateUrl: './agregar-grupo.component.html',
  styleUrls: ['./agregar-grupo.component.css']
})
export class AgregarGrupoComponent implements OnInit {
  public docenteCollection: AngularFirestoreCollection<docenteInterface>;
  public docentes: docenteInterface[];
  public carrera:  carreraInterface[];

  constructor(public dialog:MatDialog,public afs: AngularFirestore, public dataApi:GrupoService, private dataDocente: DocenteService, private dataCarrera: CarreraService) {
    
    this.dataDocente.getAlldocentes().subscribe(docente => {
      this.docentes = docente
    });
    this.dataCarrera.getAllcarreras().subscribe(carreras => {
      this.carrera = carreras;
    
    });
   
   }

   onGuardarGrupo(formGrupo: NgForm): void{
     if (formGrupo.valid){
       if (formGrupo.value.id == null) {
        this.dataApi.addGrupo(formGrupo.value);
        
       }else{
        this.dataApi.updateGrupo(formGrupo.value);
        
       }
       Swal.fire(
        'Operación Exitosa!',
        'Sus datos han sido actualizados!',
        'success'
      )
      formGrupo.resetForm();
      this.dialog.closeAll();
     }
    
  }

 

  ngOnInit() {
  }
  
resetForm(formDocente?:NgForm)  
{
    if (formDocente != null)
    formDocente.resetForm();
   
}
}
