import { TestBed } from '@angular/core/testing';

import { DadosAlunoService } from './dados-aluno.service';

describe('DadosAlunoService', () => {
  let service: DadosAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
