import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosExerciciosPage } from './dados-exercicios.page';

const routes: Routes = [
  {
    path: '',
    component: DadosExerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosExerciciosPageRoutingModule {}
