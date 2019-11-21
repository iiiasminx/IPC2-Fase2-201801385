import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudMainPage } from './stud-main.page';

describe('StudMainPage', () => {
  let component: StudMainPage;
  let fixture: ComponentFixture<StudMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
