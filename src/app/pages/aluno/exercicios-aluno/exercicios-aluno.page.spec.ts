import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciciosAlunoPage } from './exercicios-aluno.page';

describe('ExerciciosAlunoPage', () => {
  let component: ExerciciosAlunoPage;
  let fixture: ComponentFixture<ExerciciosAlunoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciosAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
