import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudMiscursosComponent } from './stud-miscursos.component';

describe('StudMiscursosComponent', () => {
  let component: StudMiscursosComponent;
  let fixture: ComponentFixture<StudMiscursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudMiscursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudMiscursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
