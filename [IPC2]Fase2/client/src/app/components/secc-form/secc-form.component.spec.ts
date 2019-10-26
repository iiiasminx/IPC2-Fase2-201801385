import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccFormComponent } from './secc-form.component';

describe('SeccFormComponent', () => {
  let component: SeccFormComponent;
  let fixture: ComponentFixture<SeccFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
