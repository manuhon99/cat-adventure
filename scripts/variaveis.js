let imagemCenario;
let imagemCenario1;
let imagemPersonagens;
let imagemPersonagemAtacando;
let imagemNinja;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemInimigoNull;
let imagemInimigoMask;
let imagemInimigoVirus;
let imagemBonus;

let imagemGameOver;
let imagemTelaInicial;
let imagemTelaPrologo;
let imagemFinal;
let imagemVida;
let imagemVidaChefao;
let fonteTelaInicial;
let fonteGameOver;

let botaoGerenciador;

let cenario;
let cenario1;
let somInicial;
let somCenario1;
let somColisao;
let somBonus;
let somDoPulo;
let somSword;
let somLoser;
let somVictory;

let personagem;
let personagem1;
let personagemAtacando;
let bonus;
let inimigoNull;
let inimigo1;
let inimigoGrande;
let inimigoVoador;
let inimigoMask; 
let inimigoVirus; 
let pontuacao;

let jogo;
let telaInicial;
let prologo;
let final;
let gameOver;
let vida;
let vidaChefao;
let cenaAtual = 'telaInicial';
let cenas;
let fita;
let texto;
let texto1;
let texto2;
let textTemp;

const textos = [];

const matrizInimigo = [
  [0, 0],
  [0, 0],
  [0, 0],
  [150, 0],
  [150, 0],
  [150, 0],
  [300, 0],
  [300, 0],
  [300, 0],
  [450, 0],
  [450, 0],
  [450, 0],
];

const matrizPersonagem = [
 [0,0],
 [220,0],
 [440,0],
 [660,0],
 [0,270],
 [220,270],
 [440,270],
 [660,270],
 [0,540],
 [220,540],
 [440,540],
 [660,540],
 [0,810],
 [220,810],
 [440,810],
 [660,810],
];

const matrizInimigoMask = [
  [0,0],
  [0,0],
  [132,0],
  [132,0],
  [264,0],
  [264,0],
  [528,0],
  [528,0],
  [660,0],
  [660,0],
];

const matrizPersonagemAtacando  = [
  [0,0],
  [0,0],
  [300,0],
  [300,0],
  [600,0],
  [600,0],
  [900,0],
  [900,0],
  [1200,0],
  [1200,0],
  [1500,0],
  [1500,0],
]

const matrizInimigoVirus = [
  [0,0]
]

const matrizNinja = [
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [300,0],
  [300,0],
  [300,0],
  [300,0],
  [300,0],
  [600,0],
  [600,0],
  [600,0],
  [600,0],
  [600,0],
  [900,0],
  [900,0],
  [900,0],
  [900,0],
  [900,0],
  [1200,0],
  [1200,0],
  [1200,0],
  [1200,0],
  [1200,0],
  [1500,0],
  [1500,0],
  [1500,0],
  [1500,0],
  [1500,0],
]

const  matrizInimigoGrande  =  [
  [0, 0],
  [0, 0],
  [0, 0],
  [150, 0],
  [150, 0],
  [150, 0],
  [300, 0],
  [300, 0],
  [300, 0],
  [450, 0],
  [450, 0],
  [450, 0],
  [600, 0],
  [600, 0],
  [600, 0],
  [750, 0],
  [750, 0],
  [750, 0],

];

const  matrizInimigoVoador  =  [
  [ 0 , 0 ] ,
  [ 0 , 0 ] ,
  [ 0 , 0 ] ,
  [ 0 , 0 ] ,
  [ 144 ,  0 ] ,
  [ 144 ,  0 ] ,
  [ 144 ,  0 ] ,
  [ 144 ,  0 ] ,
  [ 288 ,  0 ] ,
  [ 288 ,  0 ] ,
  [ 288 ,  0 ] ,
  [ 288 ,  0 ] ,
  [ 432 ,  0 ] ,
  [ 432 ,  0 ] ,
  [ 432 ,  0 ] ,
  [ 432 ,  0 ] ,

];

const inimigos = [];

let cenaAntiga;
let mudou;

