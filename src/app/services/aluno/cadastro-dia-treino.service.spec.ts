import { TestBed } from '@angular/core/testing';

import { CadastroDiaTreinoService } from './cadastro-dia-treino.service';

describe('CadastroDiaTreinoService', () => {
  let service: CadastroDiaTreinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroDiaTreinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
