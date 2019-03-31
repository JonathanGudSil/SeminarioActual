import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { carreraInterface } from '../models/carrera.modal';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(public afs: AngularFirestore) { }
  
  public carreraCollection: AngularFirestoreCollection<carreraInterface>;
  public carreras: Observable<carreraInterface[]>;
  public carreraDoc: AngularFirestoreDocument<carreraInterface>;
  public carrera: Observable<carreraInterface>;
  public selectedCarrera: carreraInterface = {
    id: null,
  }

  getAllcarreras() {
    this.carreraCollection = this.afs.collection<carreraInterface>('carrera');
    return this.carreras = this.carreraCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as carreraInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    }

    addCarrera(carrera: carreraInterface): void {
      this.carreraCollection.add(carrera);
    }
    
    updateCarrera(carrera: carreraInterface): void {
      let id = carrera.id;
      this.carreraDoc = this.afs.doc<carreraInterface>(`carrera/${id}`);
      this.carreraDoc.update(carrera);
    }

    deleteCarrera(id: string): void {
      this.carreraDoc = this.afs.doc<carreraInterface>(`carrera/${id}`);
      this.carreraDoc.delete();
    }
}
