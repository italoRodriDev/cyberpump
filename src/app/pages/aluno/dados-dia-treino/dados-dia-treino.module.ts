import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosDiaTreinoPageRoutingModule } from './dados-dia-treino-routing.module';

import { DadosDiaTreinoPage } from './dados-dia-treino.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosDiaTreinoPageRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  declarations: [DadosDiaTreinoPage]
})
export class DadosDiaTreinoPageModule {}
