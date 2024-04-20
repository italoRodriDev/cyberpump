import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciciosAlunoPageRoutingModule } from './exercicios-aluno-routing.module';

import { ExerciciosAlunoPage } from './exercicios-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExerciciosAlunoPageRoutingModule
  ],
  declarations: [ExerciciosAlunoPage]
})
export class ExerciciosAlunoPageModule {}
