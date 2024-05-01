import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermosDeUsoPage } from './termos-de-uso.page';

describe('TermosDeUsoPage', () => {
  let component: TermosDeUsoPage;
  let fixture: ComponentFixture<TermosDeUsoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosDeUsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
