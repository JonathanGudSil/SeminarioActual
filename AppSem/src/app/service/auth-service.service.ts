import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import {AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {docenteInterface} from '../models/docente.modal';
import { auth } from 'firebase/app';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }

  registerUser(email: string, pass: string){

    
    return new Promise ((resolve, reject)=>{
      this.afsAuth.auth.createUserWithEmailAndPassword(email,pass).then(
        userData=>resolve(userData),
      err => reject(err));
    });
  }

  resetPassword(email: string) {
    this.afsAuth.auth.sendPasswordResetEmail(email);
  }

  loginEmailUser(email: string, pass: string){
    return new Promise((resolve, reject) =>{
      this.afsAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData),
      err => reject(err))
    })
  }

  loginGoogleUser(){

    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  
  logoutUser(){
    return this.afsAuth.auth.signOut();
    
  }
  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
    
  }

  /*private updatedUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: docenteInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        editor: true
      }
    }
  }*/
}
