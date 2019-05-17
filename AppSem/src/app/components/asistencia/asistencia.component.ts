import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarAsistenciaComponent } from '../asistencia/agregar-asistencia/agregar-asistencia.component';
import { GrupoService } from '../../service/grupo.service';
import {grupoInterface} from '../../models/grupo.modal';
import { AgregarGrupoComponent } from '../grupo/agregar-grupo/agregar-grupo.component';
import {AsistenciaService} from '../../service/asistencia.service';
import {DatePipe} from '@angular/common';
import Swal from 'sweetalert2';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource<grupoInterface>();

  public admin: boolean;
  public fecha: Date;
  public fecha_reporte: string;
  asistencia: any;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild('reporte') content: ElementRef;
  constructor(public dialog: MatDialog,public dataGrupo: GrupoService, public dataAsistencia:AsistenciaService) {
      if (localStorage.getItem('rol') == 'docente')
      {
        this.admin = true;
      }else{
        this.admin = false;
      }
   }
  public isadmin: boolean=false;
  openDialog() {
    const dialogRef = this.dialog.open(AgregarAsistenciaComponent,{
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getListGrupo(){
    this.dataAsistencia.getAllAsistenciaDocente(localStorage.getItem('mail')).subscribe(
      grupo => {
        this.dataSource.data = grupo;
      }
    )
  }

  getReporte(){

  }

  ngOnInit() {
    if (localStorage.getItem('rol') == 'docente')
    {
      this.isadmin = false;
      this.displayedColumns =  ['modulo','fecha', 'mujeres', 'varones', 'total', 'observacion','symbol'];
    }else{
      this.isadmin = true;
      this.displayedColumns = ['modulo', 'mujeres', 'varones', 'total', 'observacion'];
    }
   // this.getListGrupo();
    this.dataAsistencia.getAllAsistencia().subscribe(asistencia => {
      this.asistencia = asistencia;
    })
  }

  generar():void{
    var data = [];
    this.asistencia.forEach(element => {
        if (this.fecha.toJSON("yyyy-MM-dd") == element.fecha){
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
      this.dataSource.data = data;
      this.fecha_reporte = this.fecha.toISOString().slice(0,10);
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
    console.log(content.innerHTML);
    doc.fromHTML(content.innerHTML,15,15,{
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('ReporteAsistencia_'+this.fecha_reporte);
  }

  onPreUpdateAsistente(grupo: grupoInterface) {
    
    const dialogRef = this.dialog.open(AgregarAsistenciaComponent,{
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
    this.dataAsistencia.selectedGrupo = Object.assign({}, grupo);
   
  }

}

export interface PeriodicElement {
  position: number;
  totmuj: number;
  totvar: number;
  total: number;
  observacion: string;
}

