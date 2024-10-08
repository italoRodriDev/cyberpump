import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormService } from '../forms/form.service';
import { AlertsService } from '../alerts/alerts.service';
import { AlertController, NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { AlunoModel } from 'src/app/models/aluno.model';
import { DiaTreinoModel } from 'src/app/models/dia-treino.model';

@Injectable({
  providedIn: 'root',
})
export class CadastroDiaTreinoService {
  formDiaTreino: FormGroup = this.formService.formDiaTreino;
  db = this.fireDatabase.database;
  idUser: string | undefined = '';
  public bsDiasTreino = new BehaviorSubject<Array<any>>([]);
  listDiasTreino = this.bsDiasTreino.asObservable();

  public bsDiaTreino = new BehaviorSubject<DiaTreinoModel | undefined>(
    undefined
  );
  diaTreino = this.bsDiaTreino.asObservable();

  constructor(
    private fireDatabase: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    private formService: FormService,
    private alertService: AlertsService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  getData(aluno: AlunoModel) {
    this.db
      .ref('DiasTreino')
      .child(this.idUser!)
      .child(aluno.id)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        this.bsDiasTreino.next([]);
        if (data) {
          const array = Object.keys(data).map((index) => data[index]);

          // Função de comparação para os dias da semana
          const diasSemana = [
            'Segunda',
            'Terça',
            'Quarta',
            'Quinta',
            'Sexta',
            'Sábado',
            'Domingo',
          ];
          array.sort((a, b) => {
            return diasSemana.indexOf(a.dia) - diasSemana.indexOf(b.dia);
          });

          this.bsDiasTreino.next(array);
        }
      });
  }

  validFormData(aluno: AlunoModel) {
    const currentID = this.formDiaTreino.controls['id'].value;
    if (this.formDiaTreino.valid) {
      if (currentID != null) {
        this.saveData(currentID, aluno);
      } else {
        const id = this.fireDatabase.createPushId();
        this.formDiaTreino.patchValue({
          id: id,
          idAluno: aluno.id,
        });
        this.saveData(id, aluno);
      }
    }
  }

  saveData(id: string, aluno: AlunoModel) {
    this.db
      .ref('DiasTreino')
      .child(this.idUser!)
      .child(aluno.id)
      .child(id)
      .update(this.formDiaTreino.value)
      .then((value) => {
        this.formService.resetDataForm();
        this.alertService.showAlert(
          'Salvo com sucesso!',
          'Suas alterações foram salvas com sucesso.'
        );
        this.navCtrl.back();
      })
      .catch((error) => {
        this.alertService.showToast('Erro ao criar cadastro!');
      });
  }

  async showAlertRemove(data: DiaTreinoModel, aluno: AlunoModel) {
    const alert = await this.alertCtrl.create({
      header: 'Deseja excluir?',
      subHeader: data.dia,
      message: 'Ao confirmar será excluído.',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {},
        },
        {
          text: 'Excluir',
          handler: () => {
            this.remove(data?.id, aluno);
          },
        },
      ],
    });
    alert.present();
  }

  remove(id: string, aluno: AlunoModel) {
    this.db
      .ref('DiasTreino')
      .child(this.idUser!)
      .child(aluno.id)
      .child(id)
      .remove()
      .then((value) => {
        this.alertService.showToast('Excludo com sucesso!');
      })
      .catch((error) => {
        this.alertService.showToast('Erro ao excluir cadastro!');
      });
  }
}
