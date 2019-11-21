import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudListaTicketsPage } from './stud-lista-tickets.page';

describe('StudListaTicketsPage', () => {
  let component: StudListaTicketsPage;
  let fixture: ComponentFixture<StudListaTicketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudListaTicketsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudListaTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
