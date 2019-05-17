import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth} from '@angular/fire/auth';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mynav',
  templateUrl: './mynav.component.html',
  styleUrls: ['./mynav.component.css']
})
export class MynavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
public correo: string = '';
public usuario: string;
  constructor(private router: Router,private breakpointObserver: BreakpointObserver,private AuthService: AuthServiceService, private afsAuth: AngularFireAuth) {
    if (localStorage.getItem('rol') == null || localStorage.getItem('rol') == ''){
      this.router.navigate(['/login']);
    }
    this.getCurrentUser();
    this.usuario = localStorage.getItem('mail');
  }
      public app_name: string = "";
      public isLogged: boolean = false;
      public isadmin:boolean = false;
      ngOnInit(){
        
      }
  getCurrentUser(){
      this.AuthService.isAuth().subscribe( auth => {
       console.log(localStorage.getItem("isLogged"));
        /*if(auth){
          console.log("user logged");
          this.isLogged = true;
        }else{
          console.log("NOT user logged");
          this.isLogged = false;
        }*/

        if (auth) {
          console.log("LOGGED", auth.email);
          console.log("LOGGED", localStorage.getItem("mail"));
          console.log(this.isLogged);
        
         
            if (localStorage.getItem("isLogged") == "1"){
              if (localStorage.getItem("mail") == "admin@gmail.com"){
                this.isadmin = true;
                localStorage.setItem("rol",'admin');
                localStorage.setItem("mail","admin@gmail.com");
              }else{
                localStorage.setItem("rol",'docente');
                localStorage.setItem("mail",auth.email);
                this.isadmin = false;
              }
              this.isLogged = true;
            }else{
              console.log(auth.email);
              localStorage.setItem("isLogged", "1");
              if (auth.email == "admin@gmail.com"){
                this.isadmin = true;
                localStorage.setItem("rol",'admin');
                localStorage.setItem("mail","admin@gmail.com");
              }else{
                localStorage.setItem("rol",'docente');
                localStorage.setItem("mail",auth.email);
                this.isadmin = false;
              }
              this.isLogged = true;
            }
          
            
            
          
          
          
        }else{
          localStorage.setItem("isLogged", "0");
          this.isLogged = false;
        }
      })
  }

  resetPassword() {
    this.AuthService.resetPassword(localStorage.getItem("mail"));
    Swal.fire(
      'Operacion exitosa',
      '¡Por favor verifique su correo para reestablecer la contraseña!',
      'success'
    );
  }

  logoutUser(){
    this.AuthService.logoutUser();
    localStorage.clear();
    localStorage.setItem('rol','');
    localStorage.setItem('mail','');
    localStorage.setItem('isLogged','0');
    localStorage.removeItem('rol');
    localStorage.removeItem('mail');
    this.router.navigate(['/login']);
    
  }

}
