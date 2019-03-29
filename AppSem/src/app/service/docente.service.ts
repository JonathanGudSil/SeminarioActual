import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { docenteInterface } from '../models/docente.modal';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(public afs: AngularFirestore) { }

  public docenteCollection: AngularFirestoreCollection<docenteInterface>;
  public docentes: Observable<docenteInterface[]>;
  public docenteDoc: AngularFirestoreDocument<docenteInterface>;
  public docente: Observable<docenteInterface>;
  public selectedDocente: docenteInterface = {
    id: null,
  }
  
  getAlldocentes() {
    this.docenteCollection = this.afs.collection<docenteInterface>('docente');
    return this.docentes = this.docenteCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as docenteInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    }

    addDocente(docente: docenteInterface): void {
      this.docenteCollection.add(docente);
    }
    updateDocente(docente: docenteInterface): void {
      let id = docente.id;
      this.docenteDoc = this.afs.doc<docenteInterface>(`docente/${id}`);
      this.docenteDoc.update(docente);
    }
    deleteDocente(id: string): void {
      this.docenteDoc = this.afs.doc<docenteInterface>(`docente/${id}`);
      this.docenteDoc.delete();
    }

};


