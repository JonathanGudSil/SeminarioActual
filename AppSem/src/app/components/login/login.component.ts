import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { docenteInterface } from '../../models/docente.modal';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  displayedColumns: string[] = ['nombres', 'apellidos', 'correo', 'usuario','contraseña'];

  

  constructor(public dialog: MatDialog,public afs: AngularFirestore,  private afsAuth: AngularFireAuth, private router: Router, private AuthService: AuthServiceService) {
    
    if (localStorage.getItem('rol') != null && localStorage.getItem('rol') != ''){
      this.router.navigate(['/inicio']);
    }
   }
  public email: string = '';
  public password: string = '';
  public docenteCollection: AngularFirestoreCollection<docenteInterface>;
/*registerUser(email: string, pass: string){
  this.afsAuth.auth.createUserWithEmailAndPassword
}

*/

onLogin(): void{
  this.AuthService.loginEmailUser(this.email,this.password).then((res) =>{
    this.docenteCollection = this.afs.collection<docenteInterface>('docente',ref => ref.where('username','==',this.email));
    this.docenteCollection.valueChanges().forEach(item => {
        
    });
    /*this.docenteCollection.valueChanges().subscribe((docente: docenteInterface) =>{

    });*/
    this.router.navigate(['/inicio']);
  }).catch(err => Swal.fire(
    'Usuarios y Contraseña Incorrectos!',
    'Por favor verificar sus credenciales',
    'error'
  ));
}

onLoginGoogle(){
  this.AuthService.loginGoogleUser().then((res) =>{
      console.log("resUser", res);
      this.router.navigate(['/inicio']);
      
  }).catch(err => console.log('err', err));
 // this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
 // 
}

onLogout(){
  this.afsAuth.auth.signOut();
}

  openDialog() { 
   /* const dialogRef = this.dialog.open(RegistrarseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });*/
  }

  ngOnInit() {
  }



   onDeleteRegistrarse(id: string): void {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
       
      })
  }


}
