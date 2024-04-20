import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-exercicios',
  templateUrl: './cadastro-exercicios.page.html',
  styleUrls: ['./cadastro-exercicios.page.scss'],
})
export class CadastroExerciciosPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  onClickBack() {
    this.navCtrl.navigateBack('home');
  }
}
