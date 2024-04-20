import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AlunoModel } from 'src/app/models/aluno.model';
import { FormService } from '../forms/form.service';
import { AlertsService } from '../alerts/alerts.service';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CadastroExerciciosService {
  
  formExercicio: FormGroup = this.formService.formExercicio;
  db = this.fireDatabase.database;
  idUser: string | undefined = '';
  public bsExercicios = new BehaviorSubject<Array<any>>([]);
  listExercicios = this.bsExercicios.asObservable();

  public bsAluno = new BehaviorSubject<AlunoModel | undefined>(undefined);
  aluno = this.bsAluno.asObservable();
  public bsDiaTreino = new BehaviorSubject<AlunoModel | undefined>(undefined);
  diaTreino = this.bsDiaTreino.asObservable();

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
    const idAluno = this.bsAluno.value!.id;
    this.db
      .ref('Exercicios')
      .child('ID_PROFESSOR')
      .child(idAluno)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const array = Object.keys(data).map((index) => data[index]);
          this.bsExercicios.next([]);
          this.bsExercicios.next(array);
        }
      });
  }

  validFormData() {
    const currentID = this.formExercicio.controls['id'].value;
    if (this.formExercicio.valid) {
      if (currentID != null) {
        this.saveData(currentID);
      } else {
        const id = this.fireDatabase.createPushId();
        this.formExercicio.patchValue({
          id: id,
        });
        this.saveData(id);
      }
    }
  }

  saveData(id: string) {
    const idAluno = this.bsAluno.value!.id;
    this.db
      .ref('Exercicios')
      .child('ID_PROFESSOR')
      .child(idAluno)
      .child(id)
      .update(this.formExercicio.value)
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
    const idAluno = this.bsAluno.value!.id;

    this.db
      .ref('Exercicios')
      .child('ID_PROFESSOR')
      .child(idAluno)
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
