import { TestBed } from '@angular/core/testing';

import { DadosExerciciosService } from './dados-exercicios.service';

describe('DadoExerciciosService', () => {
  let service: DadosExerciciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosExerciciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
