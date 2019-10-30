import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxVerComponent } from './aux-ver.component';

describe('AuxVerComponent', () => {
  let component: AuxVerComponent;
  let fixture: ComponentFixture<AuxVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
