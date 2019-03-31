import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { registrarseInterface } from '../models/registrarse.modal';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class RegistraseService {

  constructor(public afs: AngularFirestore, public dataApi:RegistraseService) { }
    
  public registrarseCollection: AngularFirestoreCollection<registrarseInterface>;
  public registrarses: Observable<registrarseInterface[]>;
  public registrarseDoc: AngularFirestoreDocument<registrarseInterface>;
  public registrarse: Observable<registrarseInterface>;
  public selectedRegistrarse: registrarseInterface = {
    id: null,
  }
  
  getAllregistrarse() {
    this.registrarseCollection = this.afs.collection<registrarseInterface>('registrarse');
    return this.registrarses = this.registrarseCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as registrarseInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    }

    addRegistrarse(registrarse: registrarseInterface): void {
      this.registrarseCollection.add(registrarse);
    }
    updateRegistrarse(registrarse: registrarseInterface): void {
      let id = registrarse.id;
      this.registrarseDoc = this.afs.doc<registrarseInterface>(`registrarse/${id}`);
      this.registrarseDoc.update(registrarse);
    }
    deleteRegistrarse(id: string): void {
      this.registrarseDoc = this.afs.doc<registrarseInterface>(`registrarse/${id}`);
      this.registrarseDoc.delete();
    }
};
