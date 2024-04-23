import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroExerciciosPageRoutingModule } from './cadastro-exercicios-routing.module';

import { CadastroExerciciosPage } from './cadastro-exercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroExerciciosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroExerciciosPage]
})
export class CadastroExerciciosPageModule {}