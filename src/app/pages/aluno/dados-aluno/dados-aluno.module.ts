import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosAlunoPageRoutingModule } from './dados-aluno-routing.module';

import { DadosAlunoPage } from './dados-aluno.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosAlunoPageRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  declarations: [DadosAlunoPage]
})
export class DadosAlunoPageModule {}
