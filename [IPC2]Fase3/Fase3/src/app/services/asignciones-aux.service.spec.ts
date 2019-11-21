import { TestBed } from '@angular/core/testing';

import { AsigncionesAuxService } from './asignciones-aux.service';

describe('AsigncionesAuxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsigncionesAuxService = TestBed.get(AsigncionesAuxService);
    expect(service).toBeTruthy();
  });
});
