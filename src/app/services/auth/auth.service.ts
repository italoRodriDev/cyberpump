import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AlertsService } from '../alerts/alerts.service';
import { FormService } from '../forms/form.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  db = this.fireDatabase.database;
  formAuthSignIn: FormGroup = this.formService.formSignIn;

  idUser: string | undefined;
  public bsAuth = new BehaviorSubject(false);
  isAuth = this.bsAuth.asObservable();

  constructor(
    private formService: FormService,
    private fireAuth: AngularFireAuth,
    private fireDatabase: AngularFireDatabase,
    private navCtrl: NavController,
    private alertService: AlertsService
  ) {}

  signIn() {
    return new Promise<any>((resolve) => {
      const email = this.formAuthSignIn.controls['email'];
      const password = this.formAuthSignIn.controls['password'];
      if (email.valid && password.valid) {
        this.fireAuth
          .signInWithEmailAndPassword(email.value, password.value)
          .then((result) => {
            this.navCtrl.navigateBack('home');
            resolve(false);
          })
          .catch((e) => {
            resolve(false);
            this.getError(e);
          });
      }
    });
  }

  signOutAccount() {
    this.fireAuth
      .signOut()
      .then(() => {
        this.bsAuth.next(false);
        this.navCtrl.navigateBack('login');
      })
      .catch((error) => {
        this.alertService.showAlert(
          'Ops! Erro ao sair da conta.',
          'ERRO: ' + error.code
        );
      });
  }

  getError(res: any) {
    switch (res) {
      case 'auth/invalid-email':
        this.alertService.showToast('Ops! Digite um usuário válido.');
        break;
      case 'auth/user-disabled':
        this.alertService.showToast('Ops! Seu acesso foi desativado.');
        break;
      case 'auth/user-not-found':
        this.alertService.showToast(
          'Ops! Esse usuário ainda não foi cadastrado.'
        );
        break;
      case 'auth/wrong-password':
        this.alertService.showToast(
          'Ops! Seu usuário ou senha não batem. Verifique e tente novamente.'
        );
        break;
      case 'auth/email-not-verified':
        this.alertService.showToast(
          'Ops! Seu usuário ainda não foi verificado, enviamos um e-email de verificação para você.'
        );
        break;
      case 'auth/too-many-requests':
        this.alertService.showToast(
          'Ops! Por excesso de tentativas essa conta foi temporariamente bloqueada. Tente mais tarde.'
        );
        break;
      case 'auth/email-already-in-use':
        this.alertService.showToast(
          'Ops! Esse usuário já foi cadastrado, tente recuperar a senha.'
        );
        break;
      case 'auth/invalid-login-credentials':
        this.alertService.showToast('Ops! Cadastro não finalizado.');
        break;
    }
  }
}
