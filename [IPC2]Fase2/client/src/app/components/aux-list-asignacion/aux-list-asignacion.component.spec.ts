import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxListAsignacionComponent } from './aux-list-asignacion.component';

describe('AuxListAsignacionComponent', () => {
  let component: AuxListAsignacionComponent;
  let fixture: ComponentFixture<AuxListAsignacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxListAsignacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxListAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
