import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { AlunoModel } from 'src/app/models/aluno.model';
import { ProfessorModel } from 'src/app/models/professor.model';
import { CadastroAlunoService } from 'src/app/services/aluno/cadastro-aluno.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DadosProfessorService } from 'src/app/services/professor/dados-professor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  professor: ProfessorModel|undefined;
  listAlunos: Array<AlunoModel> = [];

  constructor(
    private navCtrl: NavController,
    private cadastroAlunoService: CadastroAlunoService,
    private dadosProfessorService: DadosProfessorService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.dadosProfessorService.professor.subscribe((data) => {
      this.professor = data;
    });

    this.cadastroAlunoService.getData();
    this.cadastroAlunoService.listAlunos.subscribe((list) => {
      this.listAlunos = list;
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

  onClickEdit(data: AlunoModel) {
    this.cadastroAlunoService.bsAluno.next(data);
    this.navCtrl.navigateForward('cadastro-aluno');
  }

  onClickNew() {
    this.cadastroAlunoService.bsAluno.next(undefined);
    this.navCtrl.navigateForward('cadastro-aluno');
  }

  onClickRemove(data: AlunoModel) {
    this.cadastroAlunoService.showAlertRemove(data);
  }

  onClickExit() {
    this.authService.signOutAccount();
  }
}
