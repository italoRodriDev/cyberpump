import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosDiaTreinoPage } from './dados-dia-treino.page';

describe('DadosDiaTreinoPage', () => {
  let component: DadosDiaTreinoPage;
  let fixture: ComponentFixture<DadosDiaTreinoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosDiaTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
