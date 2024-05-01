import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosAlunoPage } from './dados-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: DadosAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosAlunoPageRoutingModule {}
