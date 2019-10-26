import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxMainComponent } from './aux-main.component';

describe('AuxMainComponent', () => {
  let component: AuxMainComponent;
  let fixture: ComponentFixture<AuxMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
