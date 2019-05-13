import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { asistenciaInterface } from '../models/asistencia.modal';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
    providedIn: 'root'
  })
  export class AsistenciaService {
    constructor(public afs: AngularFirestore) {
      this.asistenciaCollection = this.afs.collection<asistenciaInterface>('asistencia');
     //  this.grupo = afs.collection('grupo').valueChanges();
     }
    asistenciaCollection: AngularFirestoreCollection<asistenciaInterface>;
    asistenciaDoc: AngularFirestoreDocument<asistenciaInterface>;
    asistencia: Observable<asistenciaInterface[]>;
    grupoCollectionDocente: AngularFirestoreCollection<asistenciaInterface>;
    public selectedGrupo: asistenciaInterface = {
      id: null,
      mujeres: 0,
      varones: 0,
      observaciones: null,
 
    }

    getAllAsistencia() {
      //this.docenteCollection = this.afs.collection<docenteInterface>('docente', ref => ref.where('noInss','==','3144'));
      return this.asistencia = this.asistenciaCollection.snapshotChanges()
        .pipe(map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as asistenciaInterface;
            data.id = action.payload.doc.id;
            return data;
          });
        }));
      }
      getAllAsistenciaDocente(email: string) {

        this.grupoCollectionDocente = this.afs.collection<asistenciaInterface>('asistencia', ref => ref.where('docente_id','==',email));
        return this.asistencia = this.asistenciaCollection.snapshotChanges()
          .pipe(map(changes => {
            return changes.map(action => {
              const data = action.payload.doc.data() as asistenciaInterface;
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        }
        getAllAsistenciaModuloFecha(fecha:Date,modulo: string) {

          this.grupoCollectionDocente = this.afs.collection<asistenciaInterface>('asistencia', ref => ref.where('modulo','==',modulo));
        
          return this.asistencia = this.asistenciaCollection.snapshotChanges()
            .pipe(map(changes => {
              return changes.map(action => {
                const data = action.payload.doc.data() as asistenciaInterface;
                data.id = action.payload.doc.id;
                return data;
              });
            }));
          }
    addAsistencia(grupo: asistenciaInterface): void {
        //console.log(grupo);
        var d = JSON.parse(JSON.stringify(grupo));
        this.asistenciaCollection.add(d);

    }

    updateAsistencia(grupo: asistenciaInterface): void {
        let id = grupo.id;
        this.asistenciaDoc = this.afs.doc<asistenciaInterface>(`asistencia/${id}`);
        this.asistenciaDoc.update(grupo);
      }
      deleteAsistencia(id: string): void {
        this.asistenciaDoc = this.afs.doc<asistenciaInterface>(`asistencia/${id}`);
        this.asistenciaDoc.delete();
      }

  }