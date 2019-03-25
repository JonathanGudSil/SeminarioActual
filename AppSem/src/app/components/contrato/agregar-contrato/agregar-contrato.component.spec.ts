import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContratoComponent } from '../../contrato/agregar-contrato/agregar-contrato.component';

describe('AgregarContratoComponent', () => {
  let component: AgregarContratoComponent;
  let fixture: ComponentFixture<AgregarContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
