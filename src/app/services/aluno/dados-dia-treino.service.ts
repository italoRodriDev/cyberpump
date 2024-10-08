import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { AlunoModel } from 'src/app/models/aluno.model';
import { DiaTreinoModel } from 'src/app/models/dia-treino.model';

@Injectable({
  providedIn: 'root',
})
export class DadosDiaTreinoService {
  db = this.fireDatabase.database;
  public bsDiasTreino = new BehaviorSubject<Array<any>>([]);
  listDiasTreino = this.bsDiasTreino.asObservable();

  public bsDiaTreino = new BehaviorSubject<DiaTreinoModel | undefined>(
    undefined
  );
  diaTreino = this.bsDiaTreino.asObservable();

  constructor(private fireDatabase: AngularFireDatabase) {}

  getData(aluno: AlunoModel) {
    const idProfessor = localStorage.getItem('data-p');
    if (idProfessor) {
      this.db
        .ref('DiasTreino')
        .child(idProfessor)
        .child(aluno.id)
        .once('value', (snapshot) => {
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
  }
}
