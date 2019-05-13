import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { grupoInterface } from '../models/grupo.modal';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
    providedIn: 'root'
  })
  export class GrupoService {
    constructor(public afs: AngularFirestore) {
      this.grupoCollection = this.afs.collection<grupoInterface>('grupo');
     //  this.grupo = afs.collection('grupo').valueChanges();
     }
    grupoCollection: AngularFirestoreCollection<grupoInterface>;
    grupoDoc: AngularFirestoreDocument<grupoInterface>;
    grupo: Observable<grupoInterface[]>;
    grupoCollectionDocente: AngularFirestoreCollection<grupoInterface>;
    public selectedGrupo: grupoInterface = {
      id: null,
      mujeres: 0,
      varones: 0,
      observaciones: null,
 
    }

    getAllGrupo() {
      //this.docenteCollection = this.afs.collection<docenteInterface>('docente', ref => ref.where('noInss','==','3144'));
      return this.grupo = this.grupoCollection.snapshotChanges()
        .pipe(map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as grupoInterface;
            data.id = action.payload.doc.id;
            return data;
          });
        }));
      }
      getAllGrupoDocente(email: string) {
        console.log("EMAIL", email);
        this.grupoCollectionDocente = this.afs.collection<grupoInterface>('grupo', ref => ref.where('docente_id','==',email));
        return this.grupo = this.grupoCollection.snapshotChanges()
          .pipe(map(changes => {
            return changes.map(action => {
              const data = action.payload.doc.data() as grupoInterface;
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        }
        
    addGrupo(grupo: grupoInterface): void {
      var datos = JSON.parse(JSON.stringify(grupo));
        this.grupoCollection.add(datos);

    }

    updateGrupo(grupo: grupoInterface): void {
        let id = grupo.id;
        this.grupoDoc = this.afs.doc<grupoInterface>(`grupo/${id}`);
        this.grupoDoc.update(grupo);
      }
      deleteGrupo(id: string): void {
        this.grupoDoc = this.afs.doc<grupoInterface>(`grupo/${id}`);
        this.grupoDoc.delete();
      }

  }