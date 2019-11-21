import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudCursosAsignadosPage } from './stud-cursos-asignados.page';

describe('StudCursosAsignadosPage', () => {
  let component: StudCursosAsignadosPage;
  let fixture: ComponentFixture<StudCursosAsignadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudCursosAsignadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudCursosAsignadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
