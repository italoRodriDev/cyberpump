import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosExerciciosPage } from './dados-exercicios.page';

describe('DadosExerciciosPage', () => {
  let component: DadosExerciciosPage;
  let fixture: ComponentFixture<DadosExerciciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosExerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
