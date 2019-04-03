import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { contratoInterface } from '../models/contrato.modal';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(public afs: AngularFirestore) { }
  public contratoCollection: AngularFirestoreCollection<contratoInterface>;
  public contratos: Observable<contratoInterface[]>;
  public contratoDoc: AngularFirestoreDocument<contratoInterface>;
  public contrato: Observable<contratoInterface>;
  public selectedContrato: contratoInterface = {
    id: null,
  }
  
  getAllcontrato() {
    this.contratoCollection = this.afs.collection<contratoInterface>('contrato');
    return this.contratos = this.contratoCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as contratoInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    }

    addContrato(contrato: contratoInterface): void {
      this.contratoCollection.add(contrato);
    }
    updateContrato(contrato: contratoInterface): void {
      let id = contrato.id;
      this.contratoDoc = this.afs.doc<contratoInterface>(`contrato/${id}`);
      this.contratoDoc.update(contrato);
    }
    deleteContrato(id: string): void {
      this.contratoDoc = this.afs.doc<contratoInterface>(`contrato/${id}`);
      this.contratoDoc.delete();
    }
}
