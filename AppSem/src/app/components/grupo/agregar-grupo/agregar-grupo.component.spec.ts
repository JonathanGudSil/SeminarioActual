import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGrupoComponent } from '../../grupo/agregar-grupo/agregar-grupo.component';

describe('AgregarGrupoComponent', () => {
  let component: AgregarGrupoComponent;
  let fixture: ComponentFixture<AgregarGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
