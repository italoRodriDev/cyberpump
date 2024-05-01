import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
const userNotAuthorized = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AngularFireAuthGuard],
    data: { userNotAuthorized },
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
  {
    path: 'termos-de-uso',
    loadChildren: () => import('./pages/auth/termos-de-uso/termos-de-uso.module').then( m => m.TermosDeUsoPageModule)
  },
  {
    path: 'dados-aluno/:id',
    loadChildren: () => import('./pages/aluno/dados-aluno/dados-aluno.module').then( m => m.DadosAlunoPageModule)
  },
  {
    path: 'dados-dia-treino',
    loadChildren: () => import('./pages/aluno/dados-dia-treino/dados-dia-treino.module').then( m => m.DadosDiaTreinoPageModule)
  },
  {
    path: 'dados-exercicios',
    loadChildren: () => import('./pages/aluno/dados-exercicios/dados-exercicios.module').then( m => m.DadosExerciciosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
