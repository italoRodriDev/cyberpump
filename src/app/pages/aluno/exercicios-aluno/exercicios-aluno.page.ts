import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exercicios-aluno',
  templateUrl: './exercicios-aluno.page.html',
  styleUrls: ['./exercicios-aluno.page.scss'],
})
export class ExerciciosAlunoPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onClickCadastroExercicio() {
    this.navCtrl.navigateBack('cadastro-exercicios');
  }

  onClickBack() {
    this.navCtrl.navigateBack('home');
  }


}
