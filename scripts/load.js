function preload(){
  imagemCenario = loadImage("./assets/imagens/cenario/cidade.png");
  imagemCenario1 = loadImage("./assets/imagens/cenario/cidade4.png");
  imagemGameOver = loadImage("./assets/imagens/assets/gameover.png");

  imagemPersonagens = loadImage("./assets/imagens/personagem/ninjacapitu.png");
  imagemPersonagemAtacando = loadImage("./assets/imagens/personagem/capituatacando.png");
  
  imagemBonus = loadImage("./assets/imagens/assets/gain.png");
  
  imagemInimigo = loadImage("./assets/imagens/inimigos/Snake.png");
  imagemInimigoGrande = loadImage("./assets/imagens/inimigos/Hyena.png");
  imagemInimigoNull = loadImage("./assets/imagens/inimigos/null.png");
  imagemInimigoVoador = loadImage("./assets/imagens/inimigos/Vulture_walk.png");
  imagemInimigoMask = loadImage("./assets/imagens/inimigos/carinha.png");
  imagemInimigoVirus = loadImage("./assets/imagens/inimigos/coronga1.png");

  imagemTelaInicial = loadImage("./assets/imagens/assets/telainicial.jpg");
  imagemTelaPrologo = loadImage("./assets/imagens/assets/telaPrologo.jpg");
  imagemFinal = loadImage("./assets/imagens/assets/final.jpg");
  imagemVida = loadImage("./assets/imagens/assets/coracao.png");
  imagemVidaChefao = loadImage("./assets/imagens/assets/coracao1.png");
  
  fonteTelaInicial = loadFont("./assets/imagens/assets/fonteTitulo.otf");
  fonteTexto = loadFont("./assets/imagens/assets/fonteTexto.ttf")
  fonteGameOver = loadFont("./assets/imagens/assets/game_over.ttf")
  fita = loadJSON('./fita/fita.json');
  
  somInicial = loadSound("./assets/sons/seek.mp3");
  somCenario1 = loadSound("./assets/sons/destroy.mp3");
  somDoPulo = loadSound("./assets/sons/somPulo.mp3");
  somColisao = loadSound("./assets/sons/ouch.mp3");
  somBonus = loadSound("./assets/sons/moeda.wav");
  somSword = loadSound("./assets/sons/hitSword.mp3");
  somVictory = loadSound("./assets/sons/victory.mp3");
  somLoser = loadSound("./assets/sons/loser.mp3");
}