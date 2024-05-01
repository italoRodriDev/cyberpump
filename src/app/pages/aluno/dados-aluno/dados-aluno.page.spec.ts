import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosAlunoPage } from './dados-aluno.page';

describe('DadosAlunoPage', () => {
  let component: DadosAlunoPage;
  let fixture: ComponentFixture<DadosAlunoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
