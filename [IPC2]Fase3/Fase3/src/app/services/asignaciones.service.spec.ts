import { TestBed } from '@angular/core/testing';

import { AsignacionesService } from './asignaciones.service';

describe('AsignacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignacionesService = TestBed.get(AsignacionesService);
    expect(service).toBeTruthy();
  });
});
