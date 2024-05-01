import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosDiaTreinoPage } from './dados-dia-treino.page';

const routes: Routes = [
  {
    path: '',
    component: DadosDiaTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosDiaTreinoPageRoutingModule {}
