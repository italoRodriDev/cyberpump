import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosExerciciosPageRoutingModule } from './dados-exercicios-routing.module';

import { DadosExerciciosPage } from './dados-exercicios.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosExerciciosPageRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  declarations: [DadosExerciciosPage],
})
export class DadosExerciciosPageModule {}
