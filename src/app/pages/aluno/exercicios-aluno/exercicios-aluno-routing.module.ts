import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciciosAlunoPage } from './exercicios-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciciosAlunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosAlunoPageRoutingModule {}
