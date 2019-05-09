import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RegistraseService} from '../../service/registrase.service';
import { NgForm, FormsModule} from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {

  constructor(private router: Router,public dialog:MatDialog,public dataApi:RegistraseService, private authService: AuthServiceService) { }
  public email: string = '';
  public password: string = '';

  ngOnInit(){

  }
  onAddUser(){
    this.authService.registerUser(this.email,this.password).then((res)=>{
      Swal.fire(
        'Registrado!',
        'La cuenta ha sido creada',
        'success'
      );
      this.email ='';
      this.password = '';
    }).catch(err => Swal.fire(
      'Error!',
      'La cuenta ya existe',
      'error'
    ));
  }


  onGuardarRegistrarse(formRegistrarse: NgForm): void {
   /* if (formRegistrarse.valid)
    {
    if (formRegistrarse.value.id == null) {
      this.dataApi.addRegistrarse(formRegistrarse.value);
      Swal.fire(
        'Registrado!',
        'You clicked the button!',
        'success'
      )
    } else {
      this.dataApi.updateRegistrarse(formRegistrarse.value);
      Swal.fire(
        'Actualizado!',
        'You clicked the button!',
        'success'
      )
    }
    formRegistrarse.resetForm();
    this.dialog.closeAll();
    }*/
}

resetForm(formRegistrarse?:NgForm)  
  {
    if (formRegistrarse != null)
    formRegistrarse.resetForm();
    this.dataApi.selectedRegistrarse ={
  id: null,
  nombres: '',
  apellidos: '',
  correo: '',
  usuario: '',
  contrasena: '',
}
}



}
