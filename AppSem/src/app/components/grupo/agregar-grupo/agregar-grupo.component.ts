import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import { docenteInterface } from '../../../models/docente.modal';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { DocenteService } from '../../../service/docente.service';
import { GrupoService } from '../../../service/grupo.service';
import { carreraInterface } from '../../../models/carrera.modal';
import { CarreraService } from 'src/app/service/carrera.service';
import { NgForm, FormsModule} from '@angular/forms';
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

  constructor(public afs: AngularFirestore, public dataApi:GrupoService, private dataDocente: DocenteService, private dataCarrera: CarreraService) {
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
         console.log(formGrupo.value);
        this.dataApi.addGrupo(formGrupo.value);
        formGrupo.resetForm();
        Swal.fire(
          'Operación Exitosa',
          '¡El grupo ha sido registrado!',
          'success'
        );
       }
     }
    
  }

  ngOnInit() {
  }

}
