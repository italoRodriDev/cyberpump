import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-dia-treino',
  templateUrl: './cadastro-dia-treino.page.html',
  styleUrls: ['./cadastro-dia-treino.page.scss'],
})
export class CadastroDiaTreinoPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  onClickBack() {
    this.navCtrl.navigateBack('home');
  }
}
