import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudCursosComponent } from './stud-cursos.component';

describe('StudCursosComponent', () => {
  let component: StudCursosComponent;
  let fixture: ComponentFixture<StudCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
