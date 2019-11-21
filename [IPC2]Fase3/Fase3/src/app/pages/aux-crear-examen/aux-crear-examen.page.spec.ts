import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuxCrearExamenPage } from './aux-crear-examen.page';

describe('AuxCrearExamenPage', () => {
  let component: AuxCrearExamenPage;
  let fixture: ComponentFixture<AuxCrearExamenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxCrearExamenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuxCrearExamenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
