import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCarreraComponent } from './agregar-carrera.component';

describe('AgregarCarreraComponent', () => {
  let component: AgregarCarreraComponent;
  let fixture: ComponentFixture<AgregarCarreraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCarreraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
