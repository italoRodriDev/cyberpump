import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlunoModel } from 'src/app/models/aluno.model';
import { CadastroAlunoService } from 'src/app/services/aluno/cadastro-aluno.service';
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

  constructor(
    private formService: FormService,
    private navCtrl: NavController,
    private cadastroAlunoService: CadastroAlunoService
  ) {}

  ngOnInit() {
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
  }

  setDataForm() {
    this.blockEdit = true;
    this.form.patchValue(this.aluno!);
  }

  onClickSave() {
    this.cadastroAlunoService.validFormData();
  }

  onClickCadastroDiaTreino() {
    this.navCtrl.navigateBack('cadastro-dia-treino');
  }

  onClickExercicios() {
    this.navCtrl.navigateBack('exercicios-aluno');
  }

  onClickEdit() {
    this.blockEdit = !this.blockEdit;
  }

  onClickBack() {
    this.navCtrl.navigateBack('home');
  }
}
