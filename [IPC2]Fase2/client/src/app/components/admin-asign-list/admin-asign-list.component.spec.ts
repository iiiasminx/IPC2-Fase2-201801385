import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAsignListComponent } from './admin-asign-list.component';

describe('AdminAsignListComponent', () => {
  let component: AdminAsignListComponent;
  let fixture: ComponentFixture<AdminAsignListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAsignListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAsignListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
