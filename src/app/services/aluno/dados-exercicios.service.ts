import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { AlunoModel } from 'src/app/models/aluno.model';
import { DiaTreinoModel } from 'src/app/models/dia-treino.model';
import { ExercicioModel } from 'src/app/models/exercicio.model';

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

  constructor(private fireDatabase: AngularFireDatabase) {}

  getData(aluno: AlunoModel, diaTreino: DiaTreinoModel) {
    const idProfessor = localStorage.getItem('data-p');
    if (idProfessor) {
      this.db
        .ref('Exercicios')
        .child(idProfessor)
        .child(aluno.id)
        .child(diaTreino.id)
        .once('value', (snapshot) => {
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
