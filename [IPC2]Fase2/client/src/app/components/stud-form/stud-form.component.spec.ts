import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudFormComponent } from './stud-form.component';

describe('StudFormComponent', () => {
  let component: StudFormComponent;
  let fixture: ComponentFixture<StudFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
