import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDiaTreinoPageRoutingModule } from './cadastro-dia-treino-routing.module';

import { CadastroDiaTreinoPage } from './cadastro-dia-treino.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDiaTreinoPageRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  declarations: [CadastroDiaTreinoPage]
})
export class CadastroDiaTreinoPageModule {}
