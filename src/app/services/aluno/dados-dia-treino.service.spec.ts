import { TestBed } from '@angular/core/testing';

import { DadosDiaTreinoService } from './dados-dia-treino.service';

describe('DadosDiaTreinoService', () => {
  let service: DadosDiaTreinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosDiaTreinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
