import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormService } from '../forms/form.service';
import { AlertsService } from '../alerts/alerts.service';
import { AlertController, NavController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ExercicioModel } from 'src/app/models/exercicio.model';
import { DiaTreinoModel } from 'src/app/models/dia-treino.model';
import { AlunoModel } from 'src/app/models/aluno.model';

@Injectable({
  providedIn: 'root',
})
export class DadosExerciciosService {
  db = this.fireDatabase.database;
  public bsExercicios = new BehaviorSubject<Array<any>>([]);
  listExercicios = this.bsExercicios.asObservable();

  public bsExercicio = new BehaviorSubject<ExercicioModel | undefined>(
    undefined
  );
  exercicio = this.bsExercicio.asObservable();

  constructor(
    private fireDatabase: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    private formService: FormService,
    private alertService: AlertsService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  getData(aluno: AlunoModel, diaTreino: DiaTreinoModel) {
    const idProfessor = localStorage.getItem('data-p');
    if (idProfessor) {
      this.db
        .ref('Exercicios')
        .child(idProfessor)
        .child(aluno.id)
        .child(diaTreino.id)
        .on('value', (snapshot) => {
          const data = snapshot.val();
          this.bsExercicios.next([]);
          if (data) {
            const array = Object.keys(data).map((index) => data[index]);
            this.bsExercicios.next(array);
          }
        });
    }
  }
}
