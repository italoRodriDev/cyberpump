import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormService } from '../forms/form.service';
import { AlertsService } from '../alerts/alerts.service';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AlunoModel } from 'src/app/models/aluno.model';

@Injectable({
  providedIn: 'root',
})
export class DadosAlunoService {
  db = this.fireDatabase.database;
  public bsAluno = new BehaviorSubject<AlunoModel | undefined>(undefined);
  aluno = this.bsAluno.asObservable();

  constructor(
    private fireDatabase: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    private formService: FormService,
    private alertService: AlertsService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  getData() {
    const idProfessor = localStorage.getItem('data-p');
    const idAluno = localStorage.getItem('data-a');
    if (idProfessor && idAluno) {
      this.db
        .ref('Alunos')
        .child(idProfessor)
        .child(idAluno)
        .once('value', (snapshot) => {
          const data = snapshot.val();
          if (data) {
            this.bsAluno.next(data);
          }
        });
    }
  }
}
