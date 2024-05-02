import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Platform } from '@ionic/angular';
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

  constructor(private fireDatabase: AngularFireDatabase,
    private platorm: Platform
  ) {}

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

  openInstagram() {
    // Verifica se o dispositivo é um celular
    var isAndroid = this.platorm.is('android');
    var isIos = this.platorm.is('ios');
    
    // URL do perfil do Instagram
    var instagramURL = 'https://www.instagram.com/cyberpump_oficial/';
    
    // Se for um dispositivo móvel, abre o aplicativo do Instagram, caso contrário, abre a página no navegador
    if (isAndroid || isIos) {
      // Abre o aplicativo do Instagram
      window.location.href = 'instagram://user?username=cyberpump_oficial';
    } else {
      // Abre a página do perfil do Instagram no navegador
      window.open(instagramURL, '_blank');
    }
  }
}
