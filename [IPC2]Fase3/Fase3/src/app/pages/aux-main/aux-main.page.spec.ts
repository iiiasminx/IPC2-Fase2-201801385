import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuxMainPage } from './aux-main.page';

describe('AuxMainPage', () => {
  let component: AuxMainPage;
  let fixture: ComponentFixture<AuxMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuxMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
