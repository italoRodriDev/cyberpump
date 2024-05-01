import { TestBed } from '@angular/core/testing';

import { DadosProfessorService } from './dados-professor.service';

describe('DadosProfessorService', () => {
  let service: DadosProfessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosProfessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
