import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDiaTreinoPageRoutingModule } from './cadastro-dia-treino-routing.module';

import { CadastroDiaTreinoPage } from './cadastro-dia-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDiaTreinoPageRoutingModule
  ],
  declarations: [CadastroDiaTreinoPage]
})
export class CadastroDiaTreinoPageModule {}
