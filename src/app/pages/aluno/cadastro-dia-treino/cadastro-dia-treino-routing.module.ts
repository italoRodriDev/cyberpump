import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDiaTreinoPage } from './cadastro-dia-treino.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDiaTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDiaTreinoPageRoutingModule {}
