import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth} from '@angular/fire/auth';
import { AuthServiceService } from '../../service/auth-service.service';
import { RegistrarseComponent } from '../registrarse/registrarse.component';
import { Router } from '@angular/router';
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

  constructor(private router: Router,private breakpointObserver: BreakpointObserver,private AuthService: AuthServiceService, private afsAuth: AngularFireAuth) {
    if (localStorage.getItem('rol') == null || localStorage.getItem('rol') == ''){
      this.router.navigate(['/login']);
    }
   
  }
      public app_name: string = "";
      public isLogged: boolean = false;
      public isadmin:boolean = false;
      ngOnInit(){
        this.getCurrentUser();
      }
  getCurrentUser(){
      this.AuthService.isAuth().subscribe( auth => {
        /*if(auth){
          console.log("user logged");
          this.isLogged = true;
        }else{
          console.log("NOT user logged");
          this.isLogged = false;
        }*/

        if (auth){
          if (auth.email == "admin@gmail.com"){
            this.isadmin = true;
            localStorage.setItem("rol",'admin');
          }else{
            localStorage.setItem("rol",'docente');
            localStorage.setItem("mail",auth.email);
            this.isadmin = false;
          }
          this.isLogged = true;
          
        }else{
      
          this.isLogged = false;
        }
      })
  }

  logoutUser(){
    localStorage.clear();
    localStorage.removeItem('rol');
    localStorage.removeItem('mail');
    this.AuthService.logoutUser();
  }

}
