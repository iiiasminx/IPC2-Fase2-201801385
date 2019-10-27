import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudAsignacionComponent } from './stud-asignacion.component';

describe('StudAsignacionComponent', () => {
  let component: StudAsignacionComponent;
  let fixture: ComponentFixture<StudAsignacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudAsignacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
