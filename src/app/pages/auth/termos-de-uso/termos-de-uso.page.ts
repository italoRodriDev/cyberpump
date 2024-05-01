import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-termos-de-uso',
  templateUrl: './termos-de-uso.page.html',
  styleUrls: ['./termos-de-uso.page.scss'],
})
export class TermosDeUsoPage implements OnInit {

  @Input() termos = false;
  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  onClickAceitarTermos() {
    this.termos = true;
    this.modalCtrl.dismiss({'termos': this.termos});
  }

  onClickBack() {
    this.modalCtrl.dismiss({'termos': this.termos});
  }

}
