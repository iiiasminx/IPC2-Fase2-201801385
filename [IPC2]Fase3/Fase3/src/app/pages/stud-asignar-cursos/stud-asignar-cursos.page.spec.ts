import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudAsignarCursosPage } from './stud-asignar-cursos.page';

describe('StudAsignarCursosPage', () => {
  let component: StudAsignarCursosPage;
  let fixture: ComponentFixture<StudAsignarCursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudAsignarCursosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudAsignarCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
