import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroDiaTreinoPage } from './cadastro-dia-treino.page';

describe('CadastroDiaTreinoPage', () => {
  let component: CadastroDiaTreinoPage;
  let fixture: ComponentFixture<CadastroDiaTreinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDiaTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
