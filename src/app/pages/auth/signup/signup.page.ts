import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormService } from 'src/app/services/forms/form.service';
import { TermosDeUsoPage } from '../termos-de-uso/termos-de-uso.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  formSignUp: FormGroup = this.formService.formSignUp;
  isLoading: boolean = false;
  viewPass: boolean = false;
  termos: boolean = false;

  constructor(
    private authService: AuthService,
    private formService: FormService,
    private navCtrl: NavController,
    private alertService: AlertsService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onClickSignIn() {
    this.navCtrl.navigateForward('login');
  }

  onClickSignUp() {
    this.navCtrl.navigateForward('cadastro');
  }

  onClickContinue() {
    const passoword = this.formSignUp.controls['password'].value;
    if (passoword.length >= 8) {
      if (this.termos == true) {
        this.isLoading = true;
        this.authService.signUp().then((loading) => {
          this.isLoading = loading;
        });
      } else {
        this.onClickShowModalTermos();
      }
    } else {
      this.alertService.showToast('Crie uma senha maior');
    }
  }

  async onClickShowModalTermos() {
    const modal = await this.modalCtrl.create({
      component: TermosDeUsoPage,
      componentProps: {
        termos: this.termos,
      },
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.termos) {
      this.termos = data.termos;
    }
  }
}
