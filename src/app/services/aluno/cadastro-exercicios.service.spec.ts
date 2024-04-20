import { TestBed } from '@angular/core/testing';

import { CadastroExerciciosService } from './cadastro-exercicios.service';

describe('CadastroExerciciosService', () => {
  let service: CadastroExerciciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroExerciciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
