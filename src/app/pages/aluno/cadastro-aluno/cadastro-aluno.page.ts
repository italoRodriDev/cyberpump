import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlunoModel } from 'src/app/models/aluno.model';
import { DiaTreinoModel } from 'src/app/models/dia-treino.model';
import { CadastroAlunoService } from 'src/app/services/aluno/cadastro-aluno.service';
import { CadastroDiaTreinoService } from 'src/app/services/aluno/cadastro-dia-treino.service';
import { FormService } from 'src/app/services/forms/form.service';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.page.html',
  styleUrls: ['./cadastro-aluno.page.scss'],
})
export class CadastroAlunoPage implements OnInit {
  form: FormGroup = this.formService.formAluno;
  aluno: AlunoModel | undefined;
  listDoencasCronicas: Array<any> = this.formService.listDoencasCronicas;
  listObjetivos: Array<any> = this.formService.listObjetivos;
  listNiveis: Array<any> = this.formService.listNiveis;
  listTiposTreino: Array<any> = this.formService.listSemana;
  blockEdit: boolean = false;
  tipoTreino: any;
  listDiasTreino: Array<DiaTreinoModel> = [];

  constructor(
    private formService: FormService,
    private navCtrl: NavController,
    private cadastroAlunoService: CadastroAlunoService,
    private cadastroDiasTreinoService: CadastroDiaTreinoService
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
        this.setDataForm();
      } else {
        this.blockEdit = false;
      }
    });

    if (this.aluno != null) {
      this.cadastroDiasTreinoService.getData(this.aluno!);
      this.cadastroDiasTreinoService.listDiasTreino.subscribe((list) => {
        this.listDiasTreino = list;
        this.validTypeTraining();
      });
    }
  }

  setDataForm() {
    this.blockEdit = true;
    this.form.patchValue(this.aluno!);
  }

  validTypeTraining() {
    const numberDays = this.listDiasTreino.length;
    switch (numberDays) {
      case 1:
        this.tipoTreino = this.listTiposTreino[5];
        break;
      case 2:
        this.tipoTreino = this.listTiposTreino[0];
        break;
      case 3:
        this.tipoTreino = this.listTiposTreino[1];
        break;
      case 4:
        this.tipoTreino = this.listTiposTreino[2];
        break;
      case 5:
        this.tipoTreino = this.listTiposTreino[3];
        break;
      case 6:
        this.tipoTreino = this.listTiposTreino[4];
        break;
      default:
        this.tipoTreino = this.listTiposTreino[5];
        break;
    }
  }

  onClickSave() {
    this.cadastroAlunoService.validFormData();
  }

  onClickEditarDiaTreino(data: DiaTreinoModel) {
    this.cadastroDiasTreinoService.bsDiaTreino.next(data);
    this.navCtrl.navigateBack('cadastro-dia-treino');
  }

  onClickRemoveDiaTreino(data: DiaTreinoModel) {
    this.cadastroDiasTreinoService.showAlertRemove(data, this.aluno!);
  }

  onClickCadastroDiaTreino() {
    this.cadastroDiasTreinoService.bsDiaTreino.next(undefined);
    this.navCtrl.navigateBack('cadastro-dia-treino');
  }

  onClickEdit() {
    this.blockEdit = !this.blockEdit;
  }

  onClickBack() {
    this.navCtrl.back();
  }
}
