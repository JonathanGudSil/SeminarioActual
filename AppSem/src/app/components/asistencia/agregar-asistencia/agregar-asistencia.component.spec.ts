import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAsistenciaComponent } from '../../asistencia/agregar-asistencia/agregar-asistencia.component';

describe('AgregarAsistenciaComponent', () => {
  let component: AgregarAsistenciaComponent;
  let fixture: ComponentFixture<AgregarAsistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAsistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
