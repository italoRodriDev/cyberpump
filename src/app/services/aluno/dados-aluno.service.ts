import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { AlunoModel } from 'src/app/models/aluno.model';

@Injectable({
  providedIn: 'root',
})
export class DadosAlunoService {
  db = this.fireDatabase.database;
  public bsAluno = new BehaviorSubject<AlunoModel | undefined>(undefined);
  aluno = this.bsAluno.asObservable();

  constructor(private fireDatabase: AngularFireDatabase) {}

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
