import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlunoModel } from 'src/app/models/aluno.model';
import { DiaTreinoModel } from 'src/app/models/dia-treino.model';
import { ExercicioModel } from 'src/app/models/exercicio.model';
import { CadastroAlunoService } from 'src/app/services/aluno/cadastro-aluno.service';
import { CadastroDiaTreinoService } from 'src/app/services/aluno/cadastro-dia-treino.service';
import { CadastroExerciciosService } from 'src/app/services/aluno/cadastro-exercicios.service';
import { FormService } from 'src/app/services/forms/form.service';

@Component({
  selector: 'app-cadastro-exercicios',
  templateUrl: './cadastro-exercicios.page.html',
  styleUrls: ['./cadastro-exercicios.page.scss'],
})
export class CadastroExerciciosPage implements OnInit {
  form: FormGroup = this.formService.formExercicio;
  aluno: AlunoModel | undefined;
  diaTreino: DiaTreinoModel | undefined;
  exercicio: ExercicioModel | undefined;
  listDiaTreino: Array<any> = this.formService.listDiasSemana;
  listDoencasCronicas: Array<any> = this.formService.listDoencasCronicas;
  listEnfase: Array<any> = this.formService.listEnfase;
  blockEdit: boolean = false;

  constructor(
    private formService: FormService,
    private navCtrl: NavController,
    private cadastroAlunoService: CadastroAlunoService,
    private cadastroDiaTreinoService: CadastroDiaTreinoService,
    private cadastroExercicioService: CadastroExerciciosService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getDataService();
  }

  getDataService() {
    this.form.reset();
    this.cadastroAlunoService.aluno.subscribe((data) => {
      if (data) {
        this.aluno = data;
      }
    });
    this.cadastroDiaTreinoService.diaTreino.subscribe((data) => {
      if (data) {
        this.diaTreino = data;
      }
    });
    this.cadastroExercicioService.exercicio.subscribe((data) => {
      if (data) {
        this.exercicio = data;
        this.setDataForm();
      } else {
        this.blockEdit = false;
      }
    });
  }

  setDataForm() {
    this.blockEdit = true;
    this.form.patchValue(this.exercicio!);
  }

  onClickSave() {
    this.cadastroExercicioService.validFormData(this.aluno!, this.diaTreino!);
  }

  onClickEdit() {
    this.blockEdit = !this.blockEdit;
  }

  onClickBack() {
    this.navCtrl.back();
  }
}
