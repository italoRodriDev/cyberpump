import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroExerciciosPage } from './cadastro-exercicios.page';

describe('CadastroExerciciosPage', () => {
  let component: CadastroExerciciosPage;
  let fixture: ComponentFixture<CadastroExerciciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroExerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
