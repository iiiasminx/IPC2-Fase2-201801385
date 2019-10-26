import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxAsignacionComponent } from './aux-asignacion.component';

describe('AuxAsignacionComponent', () => {
  let component: AuxAsignacionComponent;
  let fixture: ComponentFixture<AuxAsignacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxAsignacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
