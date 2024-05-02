import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { AlunoModel } from 'src/app/models/aluno.model';
import { DiaTreinoModel } from 'src/app/models/dia-treino.model';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
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
  calcIMC: string = '0.00';
  diagnosticoIMC: string = '0.00';
  idade: string = '0';
  pesoIdeal: string = '0.00';
  emagrecer: string = '0.00';

  constructor(
    private formService: FormService,
    private navCtrl: NavController,
    private cadastroAlunoService: CadastroAlunoService,
    private cadastroDiasTreinoService: CadastroDiaTreinoService,
    private alertService: AlertsService
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
        this.calculatorIMC(this.aluno?.peso!, this.aluno?.altura!);
        this.calculatorIdade(this.aluno?.dataNascimento!);
      });
    }
  }

  calculatorIMC(peso: number, altura: number) {
    // Convertendo altura para metros, se necessário
    if (altura > 3) {
      altura /= 100; // Convertendo de centímetros para metros
    }

    // Calculando o IMC
    var imc = peso / (altura * altura);

    this.calcIMC = imc.toFixed(2); // Arredondando o resultado para 2 casas decimais

    // Determinando a categoria do IMC
    if (imc < 18.5) {
      this.diagnosticoIMC = 'Abaixo do peso';
    } else if (imc < 24.9) {
      this.diagnosticoIMC = 'Peso normal';
    } else if (imc < 29.9) {
      this.diagnosticoIMC = 'Sobrepeso';
    } else if (imc < 34.9) {
      this.diagnosticoIMC = 'Obesidade grau I (leve)';
    } else if (imc < 39.9) {
      this.diagnosticoIMC = 'Obesidade grau II (moderada)';
    } else {
      this.diagnosticoIMC = 'Obesidade grau III (grave)';
    }

    // Calculando o peso ideal (IMC ideal = 22)
    var pesoIdeal = 22 * (altura * altura);
    this.pesoIdeal = pesoIdeal.toFixed(2).toString();
    var emagrecer = peso - pesoIdeal;
    if (emagrecer > 0) {
      this.emagrecer = emagrecer.toFixed(2).toString();
    } else {
      this.emagrecer = 'ND';
    }
  }

  calculatorIdade(dataNascimento: string) {
    // Obtendo a data atual
    var hoje = moment();

    // Convertendo a data de nascimento para um objeto Moment.js
    var dataNascMoment = moment(dataNascimento);

    // Calculando a diferença de anos entre a data de nascimento e a data atual
    var idade = hoje.diff(dataNascMoment, 'years');

    if (idade < 1) {
      this.idade = 'Recém-nascido';
    } else if (idade == 1) {
      this.idade = `${idade.toString()} ano`;
    } else if (idade > 1) {
      this.idade = `${idade.toString()} anos`;
    }
  }

  formatPhone(telefone: string): string {
    // Remover todos os caracteres não numéricos do telefone
    telefone = telefone.replace(/\D/g, '');

    // Verificar se o número possui 9 dígitos (formato com nono dígito)
    if (telefone.length === 11) {
      telefone = telefone.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
      // Aplicar a máscara padrão (xx) xxxx-xxxx
      telefone = telefone.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }

    return telefone;
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

  onClickCopyCode() {
    const url = 'https://cyber-pump.web.app';
    //const url = 'http://localhost:8100';
    const idProfessor = this.cadastroAlunoService.idUser;
    const idAluno = this.aluno?.id;
    const idTreino = `${url}/dados-aluno/${idProfessor}&${idAluno}`;
    navigator.clipboard.writeText(idTreino);
    this.alertService.showAlert(
      'Link do treino copiado',
      'Agora você pode compartilhar o link com seu aluno para que ele possa acompanhar o treino.'
    );
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
