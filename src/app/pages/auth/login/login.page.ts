import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormService } from 'src/app/services/forms/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formSignIn: FormGroup = this.formService.formSignIn;
  isLoading: boolean = false;
  typePersistence: string = 'session';
  viewPass: boolean = false;

  constructor(
    private authService: AuthService,
    private formService: FormService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  onChangePersistenceAuth(ev: any) {
    const checked = ev.detail.checked;
    if (checked == true) {
      this.typePersistence = 'local';
    } else {
      this.typePersistence = 'session';
    }
  }

  onClickSignUp() {
    this.navCtrl.navigateForward('cadastro');
  }

  onClickRecoverPassword() {
    this.navCtrl.navigateForward('recuperacao');
  }

  onClickContinue() {
    this.isLoading = true;
    this.authService.signIn().then((loading) => {
      this.isLoading = loading;
    });
  }
}
