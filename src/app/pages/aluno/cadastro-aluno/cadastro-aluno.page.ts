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
  blockEdit: boolean = false;
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
      });
    }
  }

  setDataForm() {
    this.blockEdit = true;
    this.form.patchValue(this.aluno!);
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
