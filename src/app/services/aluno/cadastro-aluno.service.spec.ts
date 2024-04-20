import { TestBed } from '@angular/core/testing';

import { CadastroAlunoService } from './cadastro-aluno.service';

describe('CadastroAlunoService', () => {
  let service: CadastroAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
