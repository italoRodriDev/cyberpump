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
  selector: 'app-cadastro-dia-treino',
  templateUrl: './cadastro-dia-treino.page.html',
  styleUrls: ['./cadastro-dia-treino.page.scss'],
})
export class CadastroDiaTreinoPage implements OnInit {
  form: FormGroup = this.formService.formDiaTreino;
  aluno: AlunoModel | undefined;
  diaTreino: DiaTreinoModel | undefined;
  listDiaTreino: Array<any> = this.formService.listDiasSemana;
  listDoencasCronicas: Array<any> = this.formService.listDoencasCronicas;
  listEnfase: Array<any> = this.formService.listEnfase;
  blockEdit: boolean = false;

  listExercicios: Array<ExercicioModel> = [];

  constructor(
    private formService: FormService,
    private navCtrl: NavController,
    private cadastroAlunoService: CadastroAlunoService,
    private cadastroDiaTreinoService: CadastroDiaTreinoService,
    private cadastroExercicioService: CadastroExerciciosService
  ) {}

  ngOnInit() {
    this.formService.resetDataForm();
  }

  ionViewDidEnter() {
    this.getDataService();
  }

  getDataService() {
    this.cadastroAlunoService.aluno.subscribe((data) => {
      if (data) {
        this.aluno = data;
      }
    });
    this.cadastroDiaTreinoService.diaTreino.subscribe((data) => {
      if (data) {
        this.diaTreino = data;
        this.setDataForm();
      } else {
        this.blockEdit = false;
      }
    });
    if (this.aluno != null && this.diaTreino != null) {
      this.cadastroExercicioService.getData(this.aluno!, this.diaTreino!);
      this.cadastroExercicioService.bsExercicios.subscribe((list) => {
        this.listExercicios = list;
      });
    }
  }

  setDataForm() {
    this.blockEdit = true;
    this.form.patchValue(this.diaTreino!);
  }

  onClickSave() {
    this.cadastroDiaTreinoService.validFormData(this.aluno!);
  }

  onClickCadastroExercicio() {
    this.cadastroExercicioService.bsExercicio.next(undefined);
    this.navCtrl.navigateBack('cadastro-exercicios');
  }

  onClickEditarExercicio(data: ExercicioModel) {
    this.cadastroExercicioService.bsExercicio.next(data);
    this.navCtrl.navigateBack('cadastro-exercicios');
  }

  onClickExcluirExercicio(data: ExercicioModel) {
    this.cadastroExercicioService.showAlertRemove(this.aluno!, this.diaTreino!, data);
  }

  onClickEdit() {
    this.blockEdit = !this.blockEdit;
  }

  onClickBack() {
    this.navCtrl.back();
  }
}
