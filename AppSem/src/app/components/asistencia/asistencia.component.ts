import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AgregarAsistenciaComponent } from '../asistencia/agregar-asistencia/agregar-asistencia.component';
import { GrupoService } from '../../service/grupo.service';
import {grupoInterface} from '../../models/grupo.modal';
import { AgregarGrupoComponent } from '../grupo/agregar-grupo/agregar-grupo.component';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource<grupoInterface>();


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog,public dataGrupo: GrupoService) {
    
   }
  public isadmin: boolean=false;
  openDialog() {
    const dialogRef = this.dialog.open(AgregarAsistenciaComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getListGrupo(){
    this.dataGrupo.getAllGrupoDocente(localStorage.getItem('mail')).subscribe(
      grupo => {
        this.dataSource.data = grupo;
      }
    )
  }

  ngOnInit() {
    if (localStorage.getItem('rol') == 'docente')
    {
      this.isadmin = false;
      this.displayedColumns =  ['modulo', 'mujeres', 'varones', 'total', 'observacion','symbol'];
    }else{
      this.isadmin = true;
      this.displayedColumns = ['modulo', 'mujeres', 'varones', 'total', 'observacion'];
    }
    this.getListGrupo();
  }

  onPreUpdateAsistente(grupo: grupoInterface) {
    
    const dialogRef = this.dialog.open(AgregarAsistenciaComponent,{
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
    this.dataGrupo.selectedGrupo = Object.assign({}, grupo);
    console.log("Grupo",this.dataGrupo.selectedGrupo.modulo);
  }

}

export interface PeriodicElement {
  position: number;
  totmuj: number;
  totvar: number;
  total: number;
  observacion: string;
}

