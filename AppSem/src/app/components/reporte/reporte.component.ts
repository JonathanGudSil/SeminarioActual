import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { ReporteService } from '../../service/reporte.service';
import {AsistenciaService} from '../../service/asistencia.service';
import { GrupoService } from '../../service/grupo.service';
import {grupoInterface} from '../../models/grupo.modal';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as _ from 'lodash';
import * as moment from 'moment/moment';
import Swal from 'sweetalert2';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  public GrupoCollection: AngularFirestoreCollection<grupoInterface>
  public grupo: grupoInterface[];
  public email: string;
  public modulo:string;
  public fecha:Date;
  public format:"yyyy-mm-dd";
  @ViewChild('chart') el: ElementRef;
  filteredAsistencia: any;
  filters = {};
  asistencia: any;
  @ViewChild('reporte') content: ElementRef;
  constructor(public dataAsistencia:AsistenciaService,public grupoService: GrupoService) {

    this.grupoService.getAllGrupo().subscribe(grupos =>{
      this.grupo = grupos
    })


   // this.getfecha();
   }

  ngOnInit() {
    this.dataAsistencia.getAllAsistencia().subscribe(asistencia => {
      this.asistencia = asistencia;
    })
    //this.getChart();
   
  }


 
  

  getChart(){
    const element = this.el.nativeElement

    const data = [{
      x: [1,2,3,4,5],
      y: [1,2,4,8,16]
    }]

    const style = {
      margin: { t: 0}
    }
  
   Plotly.plot(element, data, style);
  }

  getdata(f:Date,m:string){
    this.dataAsistencia.getAllAsistenciaDocente(this.email).subscribe(
      grupo => {
        this.topoChart(grupo);
      }
    )
  }

  topoChart(data) {
   

    const element = this.el.nativeElement
  
    var formattedData = [{
                 x: ['Varones','Mujeres'],
                y: [data[0].varones, data[0].mujeres],
               type: 'bar'
            }];

    const layout = {
      title: data[0].modulo,
      autosize: false,
      width: 400,
      height: 300,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
      }
    };

    Plotly.plot(element, formattedData, layout);
 
  }

  /*getfecha():void {
    let fechaActual = new Date();
    let dia = fechaActual.getDate().toString();
    let mes = (fechaActual.getMonth() + 1).toString();
    let anio = fechaActual.getFullYear().toString();
    let hora = fechaActual.getHours().toString();
    let minutos = fechaActual.getMinutes().toString();
    let segundos = fechaActual.getSeconds().toString();
    this.fecha = anio + "-" + mes + "-" + dia;
  }*/
 
  generar() : void{
    var data = [];
    this.asistencia.forEach(element => {
        if (this.modulo.trim() == element.modulo.trim() && this.fecha.toJSON("yyyy-MM-dd") == element.fecha){
          data.push(element);
        }

        
    });

    if (data.length == 0){
      Swal.fire(
        'Registro Vacio',
        '¡No se encontro registro!',
        'warning'
      );
    }else{
      this.topoChart(data);
    }
    
    
  }

  descargar(): void{
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor': function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('ReporteAsistencia_'+this.modulo + "_"+ this.fecha);
  }
}
