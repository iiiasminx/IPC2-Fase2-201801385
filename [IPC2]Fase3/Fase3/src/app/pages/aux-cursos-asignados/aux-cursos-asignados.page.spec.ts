import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuxCursosAsignadosPage } from './aux-cursos-asignados.page';

describe('AuxCursosAsignadosPage', () => {
  let component: AuxCursosAsignadosPage;
  let fixture: ComponentFixture<AuxCursosAsignadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxCursosAsignadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuxCursosAsignadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
