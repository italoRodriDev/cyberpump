import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cadastro-aluno',
    loadChildren: () => import('./pages/aluno/cadastro-aluno/cadastro-aluno.module').then( m => m.CadastroAlunoPageModule)
  },
  {
    path: 'cadastro-dia-treino',
    loadChildren: () => import('./pages/aluno/cadastro-dia-treino/cadastro-dia-treino.module').then( m => m.CadastroDiaTreinoPageModule)
  },
  {
    path: 'cadastro-exercicios',
    loadChildren: () => import('./pages/aluno/cadastro-exercicios/cadastro-exercicios.module').then( m => m.CadastroExerciciosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
