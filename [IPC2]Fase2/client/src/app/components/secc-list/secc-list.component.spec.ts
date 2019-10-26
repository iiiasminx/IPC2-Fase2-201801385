import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccListComponent } from './secc-list.component';

describe('SeccListComponent', () => {
  let component: SeccListComponent;
  let fixture: ComponentFixture<SeccListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
