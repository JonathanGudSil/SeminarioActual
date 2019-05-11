import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReporteService } from '../../service/reporte.service';
import {AsistenciaService} from '../../service/asistencia.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;
  constructor(private reporteService: ReporteService,public dataAsistencia:AsistenciaService) { }

  ngOnInit() {
    //this.getChart();
   this.getdata();
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

  getdata(){
    this.dataAsistencia.getAllAsistenciaDocente(localStorage.getItem('mail')).subscribe(
      grupo => {
        console.log(grupo);
        this.topoChart(grupo);
      }
    )
  }

  topoChart(data) {
    const element = this.el.nativeElement
    const formattedData = [{
                 x: ['Varones','Mujeres'],
                y: [data[0].varones, data[0].mujeres],
               type: 'bar'
            }];

    const layout = {
      title: data[0].modulo,
      autosize: false,
      width: 750,
      height: 500,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
      }
    };

    Plotly.plot(element, formattedData, layout);
  }
}
