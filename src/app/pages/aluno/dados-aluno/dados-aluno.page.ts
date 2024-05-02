import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { AlunoModel } from 'src/app/models/aluno.model';
import { DiaTreinoModel } from 'src/app/models/dia-treino.model';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { CadastroAlunoService } from 'src/app/services/aluno/cadastro-aluno.service';
import { CadastroDiaTreinoService } from 'src/app/services/aluno/cadastro-dia-treino.service';
import { DadosAlunoService } from 'src/app/services/aluno/dados-aluno.service';
import { DadosDiaTreinoService } from 'src/app/services/aluno/dados-dia-treino.service';
import { FormService } from 'src/app/services/forms/form.service';
import { DadosProfessorService } from 'src/app/services/professor/dados-professor.service';

@Component({
  selector: 'app-dados-aluno',
  templateUrl: './dados-aluno.page.html',
  styleUrls: ['./dados-aluno.page.scss'],
})
export class DadosAlunoPage implements OnInit {
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
    private dadosAlunoService: DadosAlunoService,
    private dadosDiasTreinoService: DadosDiaTreinoService,
    private dadosProfessorService: DadosProfessorService,
    private alertService: AlertsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getParamsUrl();
  }

  ionViewDidEnter() {
    this.getDataService();
  }

  async getParamsUrl() {
    this.route.params.subscribe((data: any) => {
      if (data.id != null) {
        const url = data.id.split('&');
        const idProfessor = url[0];
        const idAluno = url[1];
        localStorage.setItem('data-p', idProfessor);
        localStorage.setItem('data-a', idAluno);
      }
    });
  }

  getDataService() {
    this.dadosAlunoService.getData();
    this.dadosAlunoService.aluno.subscribe((data) => {
      if (data) {
        this.aluno = data;
        if (this.aluno != null) {
          this.dadosDiasTreinoService.getData(this.aluno!);
          this.dadosDiasTreinoService.listDiasTreino.subscribe((list) => {
            this.listDiasTreino = list;
            this.validTypeTraining();
          });
        }
      } else {
        this.blockEdit = false;
      }
    });
  }

  isDayShare(): boolean {
    // Obtém a data atual
    const currentDate = moment();

    // Verifica se a data atual está entre os dias 20 e 28 do mês
    const isBetweenDates = currentDate.date() >= 1 && currentDate.date() <= 15;

    return isBetweenDates;
  }

  onClickOpenInstagram() {
    this.dadosProfessorService.openInstagram();
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

  onClickEditarDiaTreino(data: DiaTreinoModel) {
    this.dadosDiasTreinoService.bsDiaTreino.next(data);
    this.navCtrl.navigateBack('dados-dia-treino');
  }

  onClickBack() {
    this.navCtrl.back();
  }
}
