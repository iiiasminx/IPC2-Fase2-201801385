import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudCrearTicketPage } from './stud-crear-ticket.page';

describe('StudCrearTicketPage', () => {
  let component: StudCrearTicketPage;
  let fixture: ComponentFixture<StudCrearTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudCrearTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudCrearTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
