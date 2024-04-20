import { TestBed } from '@angular/core/testing';

import { ExerciciosAlunoService } from './exercicios-aluno.service';

describe('ExerciciosAlunoService', () => {
  let service: ExerciciosAlunoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciciosAlunoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
