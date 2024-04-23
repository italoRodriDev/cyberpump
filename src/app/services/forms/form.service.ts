import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const EMPTY_REGEX = /(.|\s)*\S(.|\s)*/;
const PRICE_REGEX = /^[\d.,]+$/;
const NUMBER_REGEX = /^[0-9]+$/;

@Injectable({
  providedIn: 'root',
})
export class FormService {
  urlSiteOficial: string = '';
  readonly userNameValidator = [
    '',
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ];
  readonly searchValidator = [
    '',
    [
      Validators.pattern(EMPTY_REGEX),
      Validators.minLength(20),
      Validators.maxLength(200),
    ],
  ];
  readonly nameValidator = [
    '',
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ];
  readonly textValidator = [
    '',
    [Validators.minLength(1), Validators.maxLength(100), Validators.required],
  ];
  readonly emailValidator = [
    '',
    [
      Validators.email,
      Validators.minLength(8),
      Validators.maxLength(100),
      Validators.required,
    ],
  ];
  readonly passValidator = [
    '',
    [Validators.minLength(8), Validators.maxLength(30), Validators.required],
  ];
  readonly titleValidator = [
    '',
    [Validators.minLength(1), Validators.maxLength(100), Validators.required],
  ];
  readonly descValidator = [
    '',
    [Validators.minLength(8), Validators.maxLength(9000), Validators.required],
  ];
  readonly numberAddressValidator = [
    '',
    [
      Validators.pattern(NUMBER_REGEX),
      Validators.minLength(1),
      Validators.maxLength(10),
      Validators.required,
    ],
  ];

  readonly numberValidator = [
    '',
    [
      Validators.pattern(NUMBER_REGEX),
      Validators.minLength(0),
      Validators.maxLength(9999),
    ],
  ];

  readonly phoneValidator = [
    '',
    [
      Validators.pattern(NUMBER_REGEX),
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.required,
    ],
  ];
  readonly formattedAddressValidator = [
    '',
    [Validators.minLength(10), Validators.maxLength(300), Validators.required],
  ];
  readonly reqValidator = ['', [Validators.required]];

  readonly priceValidator = [
    '',
    [Validators.required, Validators.pattern(PRICE_REGEX)],
  ];

  listDoencasCronicas: Array<any> = [
    { id: 1, titulo: 'Nenhuma', isChecked: false },
    { id: 2, titulo: 'Diabetes', isChecked: false },
    { id: 3, titulo: 'Asma', isChecked: false },
    { id: 4, titulo: 'Doença Pulmonar', isChecked: false },
    { id: 5, titulo: 'Acidente Vascular', isChecked: false },
    { id: 6, titulo: 'Hipertensão Arterial', isChecked: false },
    { id: 7, titulo: 'Câncer', isChecked: false },
    { id: 8, titulo: 'Obesidade', isChecked: false },
  ];

  listDiasSemana: Array<any> = [
    { nome: 'Segunda' },
    { nome: 'Terça' },
    { nome: 'Quarta' },
    { nome: 'Quinta' },
    { nome: 'Sexta' },
    { nome: 'Sábado' },
    { nome: 'Domingo' },
  ];

  listSemana: Array<any> = [
    {
      id: 'Treinos AB',
      titulo: 'Treinos AB',
      icon: 'assets/svg/icon_treinos_ab.svg',
      subtitulo: 'Rotinas de Treinos em 2 dias por semana',
      descricao: `
      Esta rotina consiste no treinamento em que todos
      os grupos musculares do corpo são divididos em
      dois dias de treino por semana. O objetivo desta
      divisão de treinos é aprimorar o condicionamento
      físico, a coordenação motora e a resistência,
      preparando uma base para um treino de maior
      intensidade. Desta forma, esses treinos geralmente
      são indicados para iniciantes, sendo uma ótima
      estratégia para adaptação e desenvolvimento
      muscular a curto prazo.

      Geralmente, os treinos realizados em dois dias são
      divididos entre membros superiores e inferiores,
      mas isso pode variar e até mesmo usar o corpo
      todo em cada treino. Podem ser realizados duas ou
      quatro vezes na semana, repetindo as séries após
      um ou dois dias de descanso.

      Nós desenvolvemos sugestões de treinos AB para
      ajudar você a atingir seus objetivos.
      `,
    },
    {
      id: 'Treinos ABC',
      titulo: 'Treinos ABC',
      icon: 'assets/svg/icon_treinos_abc.svg',
      subtitulo: 'Rotinas de Treinos em 3 dias por semana',
      descricao: `A divisão de treino em 3 dias da semana consiste
      no fracionamento dos músculos do corpo em
      
      3 treinos distintos. Essa divisão de reino pode
      gerar resultados para qualquer pessoa, esteja
      
      no nível iniciante, intermediário ou avançado.
      
      Conta com exercícios compostos e isolados em
      equilíbrio, trabalhando os músculos uma ou duas
      vezes na semana, É indicado para quem deseja
      melhorar o volume muscular de maneira moderada
      e sem excessos. Geralmente, cada treino contém
      estímulos a um músculo grande e a vários músculos
      pequenos,
      
      Esta divisão de treino pode ser repetida uma ou duas
      vezes na semana, dependendo da disponibilidade
      
      da pessoa. Quando realizado 3 vezes na semana,
      este treino aprimora a manutenção da massa
      muscular, podendo ser utilizado em conjunto com
      um treino aeróbico para perda de gordura. Para
      obter crescimento muscular treinando 3 vezes na
      semana, é necessário intensificar o treino através
      
      de cargas elevadas e técnicas avançadas. Se você
      tiver disponibilidade para treinar 6 vezes por semana,
      essa divisão de treino será eficiente para focar no
      crescimento muscular, pois cada músculo será
      estimulado duas vezes na semana e terá o tempo
      ideal de descanso.
      
      Preparamos sugestões de treinos ABC para você
      conquistar seus objetivos.`,
    },
    {
      id: 'Treinos ABCD',
      titulo: 'Treinos ABCD',
      icon: 'assets/svg/icon_treinos_abcd.svg',
      subtitulo: 'Rotinas de Treinos em 4 dias por semana',
      descricao: `Esta divisão de treino fraciona o treinamento de
      todos os músculos do corpo em 4 treinos distintos
      por semana. É ideal para praticantes que já possuem
      certa experiência, pois a maior parte da musculatura.
      é treinada apenas uma vez na semana, sendo
      necessária grande intensidade para acompanhar o
      longo período de descanso. Essa divisão de treino
      possibilita a prescrição de muitos exercícios por
      grupo muscular, aumentando a eficácia do treino,
      dando ênfase a regiões específicas.
      
      Esta rotina de 4 treinos por semana geralmente
      é executada com um dia de descanso no meio
      
      da semana, proporcionando tempo ideal para
      recuperação muscular. É uma boa divisão para quem
      já realiza 3 treinos na semana e deseja aumentar
      
      a intensidade do treino dando ênfase a áreas
      específicas do corpo.`,
    },
    {
      id: 'Treinos ABCDE',
      titulo: 'Treinos ABCDE',
      icon: 'assets/svg/icon_treinos_abcde.svg',
      subtitulo: 'Rotinas de Treinos em 5 dias por semana',
      descricao: `Esta divisão de treino fraciona todos os músculos
      do corpo em 5 treinos distintos, executados
      semanalmente. Esta divisão de treinos geralmente
      é composta por muitos exercícios para o mesmo
      grupamento muscular, estimulando-os em todos os
      ângulos possíveis. Além disso, treinar intensamente
      5 dias por semana demanda uma recuperação
      rápida dos músculos, e por isso, esse tipo de
      
      treino é ideal para pessoas de nível intermedi
      avançado.
      
      Nesta divisão, os músculos grandes geralmente
      são estimulados uma vez na semana, enquanto os.
      músculos pequenos são estimulados duas, sendo
      uma de forma direta e outra de forma indireta
      Dependendo da divisão e da intensidade de treino,
      pode ser necessário um dia de descanso no meio da
      semana e um cuidado especial com a alimentação e
      suplementação. Também é possível dar ênfase a um
      grupo muscular grande, treinando-o duas vezes por
      semana
      
      Preparamos sugestões de treinos ABCDE para você
      conquistar seus objetivos.
      `,
    },
    {
      id: 'Treinos ABCDEF',
      titulo: 'Treinos ABCDEF',
      icon: 'assets/svg/icon_treinos_abcdef.svg',
      subtitulo: 'Rotinas de Treinos em 6 dias por semana',
      descricao: `Esta divisão de treino fraciona todos os músculos
      do corpo em 6 treinos distintos a serem executados
      semanalmente. É uma divisão restrita a praticantes
      de musculação de nível avançado, devido à alta
      intensidade das séries em associação ao pouco
      tempo de descanso. Para a eficácia dessa divisão
      de treino, pode haver a necessidade de recursos
      ergogênicos, essenciais para auxiliar na intensidade
      e recuperação da musculatura.`,
    },
    {
      id: 'Outro',
      titulo: 'Treinos sem divisão',
      icon: 'assets/svg/icon_treinos_abcdef.svg',
      subtitulo: 'Treino não recomendado!',
      descricao: `Treino não recomendado!`,
    },
  ];

  listMusculosCostas: Array<any> = [
    'Trapézio',
    'Tríceps',
    'Dorsais',
    'Lombares',
    'Isquiotibiais',
    'Glúteos',
    'Panturrilhas',
    'Cardio',
  ];

  listMusculosFrente: Array<any> = [
    'Ombros',
    'Peitoral',
    'Bíceps',
    'Abdomen',
    'Oblíquos',
    'Antebraços',
    'Abdutores',
    'Adutores',
    'Quadriceps',
    'Cardio',
  ];

  listSlideTop: Array<any> = [
    { titulo: 'Hipertrofia', img: 'assets/images/hipertrofia_slide.jpg' },
    { titulo: 'Definição', img: 'assets/images/definicao_slide.jpg' },
    { titulo: 'Perder Peso', img: 'assets/images/perder_peso_slide.jpg' },
  ];

  listObjetivos: Array<any> = [
    { titulo: 'Hipertrofia', img: 'assets/images/hipertrofia_slide.jpg' },
    { titulo: 'Definição', img: 'assets/images/definicao_slide.jpg' },
    { titulo: 'Perder Peso', img: 'assets/images/perder_peso_slide.jpg' },
  ];

  listEnfase: Array<any> = [
    { titulo: 'Peitoral' },
    { titulo: 'Costas' },
    { titulo: 'Pernas' },
    { titulo: 'Braços' },
    { titulo: 'Abdômen' },
    { titulo: 'Glúteos' },
    { titulo: 'Proporcional' },
    { titulo: 'Cardio' },
  ];

  listNiveis: Array<any> = [
    { titulo: 'Iniciante' },
    { titulo: 'Intermediário' },
    { titulo: 'Avançado' },
  ];

  formSignIn: FormGroup = this.fb.group({
    email: this.emailValidator,
    password: this.passValidator,
  });

  formAluno: FormGroup = this.fb.group({
    id: [],
    nome: this.nameValidator,
    email: this.emailValidator,
    academia: this.reqValidator,
    telefone: this.phoneValidator,
    doencas: this.reqValidator,
    objetivo: this.reqValidator,
    nivel: this.reqValidator,
  });

  formDiaTreino: FormGroup = this.fb.group({
    id: [],
    idAluno: [],
    dia: this.reqValidator,
    enfase: this.reqValidator,
    obs: this.reqValidator,
  });

  formExercicio: FormGroup = this.fb.group({
    id: [],
    idAluno: [],
    idDiaTreino: [],
    nome: this.nameValidator,
    enfase: this.reqValidator,
    series: this.reqValidator,
    repeticoes: this.reqValidator,
    obs: this.reqValidator,
  });

  constructor(private fb: FormBuilder) {
    this.resetDataForm();
  }

  resetDataForm() {
    this.formSignIn.reset();
    this.formAluno.reset();
  }
}
