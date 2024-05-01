import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { ProfessorModel } from 'src/app/models/professor.model';

@Injectable({
  providedIn: 'root',
})
export class DadosProfessorService {
  db = this.fireDatabase.database;
  idUser: string | undefined = '';
  public bsProfessor = new BehaviorSubject<ProfessorModel | undefined>(
    undefined
  );
  professor = this.bsProfessor.asObservable();

  constructor(private fireDatabase: AngularFireDatabase) {}

  getData() {
    this.db
      .ref('Professor')
      .child(this.idUser!)
      .once('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          this.bsProfessor.next(data);
        }
      });
  }
}
