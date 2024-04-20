import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { AlertsService } from '../alerts/alerts.service';
import { FormService } from '../forms/form.service';
import { BehaviorSubject } from 'rxjs';
import { AlunoModel } from 'src/app/models/aluno.model';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CadastroAlunoService {
  formAluno: FormGroup = this.formService.formAluno;
  db = this.fireDatabase.database;
  idUser: string | undefined = '';
  public bsAlunos = new BehaviorSubject<Array<any>>([]);
  listAlunos = this.bsAlunos.asObservable();

  public bsAluno = new BehaviorSubject<AlunoModel | undefined>(undefined);
  aluno = this.bsAluno.asObservable();

  constructor(
    private fireDatabase: AngularFireDatabase,
    private fireAuth: AngularFireAuth,
    private formService: FormService,
    private alertService: AlertsService,
    private navCtrl: NavController, 
    private alertCtrl: AlertController
  ) {
    this.getUid();
  }

  getUid() {
    this.fireAuth.currentUser.then((i) => {
      this.idUser = i?.uid;
    });
  }

  getData() {
    this.db
      .ref('Alunos')
      .child('ID_PROFESSOR')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const array = Object.keys(data).map((index) => data[index]);
          this.bsAlunos.next([]);
          this.bsAlunos.next(array);
        }
      });
  }

  validFormData() {
    const currentID = this.formAluno.controls['id'].value;
    if (this.formAluno.valid) {
      if (currentID != null) {
        this.saveData(currentID);
      } else {
        const id = this.fireDatabase.createPushId();
        this.formAluno.patchValue({
          id: id,
        });
        this.saveData(id);
      }
    }
  }

  saveData(id: string) {
    this.db
      .ref('Alunos')
      .child('ID_PROFESSOR')
      .child(id)
      .update(this.formAluno.value)
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

  async showAlertRemove(data: AlunoModel) {
    const alert = await  this.alertCtrl.create({
      header: 'Deseja excluir?',
      subHeader: data.nome,
      message: 'Ao confirmar será excluído.',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {}
        },
        {
          text: 'Excluir',
          handler: () => {
            this.remove(data?.id);
          }
        },
      ]
    });
    alert.present();
    
  }

  remove(id: string) {
    this.db
      .ref('Alunos')
      .child('ID_PROFESSOR')
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
