import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  private correo: string = '';
  constructor() { 
    this.correo = localStorage.getItem('correo');

  }

  ngOnInit() {
  }

}
