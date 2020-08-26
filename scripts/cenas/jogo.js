class Jogo {
  constructor(){
      this.indice = 0;
      this.mapa = fita.mapa;
  }
    
  setup(){
    frameRate(8);
    cenario = new Cenario(imagemCenario, 3);
    cenario1 = new Cenario(imagemCenario1, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    vidaChefao = new Chefao(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    final = new Final();
    gameOver = new GameOver();
   
    personagem = new Personagem(matrizNinja, imagemPersonagens, 0, 110, 150, 150, 300, 300);    
    personagem1 = new Personagem(matrizNinja, imagemPersonagens, 0, 110, 150, 150, 300, 300);    
    personagemAtacando = new Personagem (matrizPersonagemAtacando, imagemPersonagemAtacando, 0, 110, 150, 150, 300, 300);
    
    bonus = new Bonus(imagemBonus, 10);

    inimigo1 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 110, 75, 75, 150, 150, 10);
    inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 210, 72, 72, 144, 144, 10);
    inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width - 52, 110, 75, 75, 150, 150, 15);
    inimigoMask = new Inimigo(matrizInimigoMask, imagemInimigoMask, width - 52, 110, 66, 75, 132, 150, 5);
    inimigoNull = new Inimigo(matrizInimigoGrande, imagemInimigoNull, 0, 0, 0, 0, 400, 400, 15);
    inimigoVirus = new Inimigo(matrizInimigoVirus, imagemInimigoVirus, 0, 110, 139, 140, 278, 280, 15);
    
    inimigos.push(inimigo1);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoMask);
    inimigos.push(inimigoVirus);

  }
    
  keyPress(key){
    if(key === 'ArrowUp'){
      personagem.pula();
      somDoPulo.play();
    } else if(key === 'z'){
        personagem = personagemAtacando;
        setTimeout(() => {
        personagem = personagem1;
        }, 500);
    }
  }

  alteraCena() {
    cenaAtual = 'fase2'
  }

  alteraCena1() {
    cenaAtual = 'gameOver'
  }

  draw(){
    if(pontuacao.pontos>19){
      this.alteraCena();
    }

    cenario.exibe()
    cenario.move()

    vida.draw()

    pontuacao.exibe();
    pontuacao.adicionarPonto()
        
    personagem.exibe();
    personagem.aplicaGravidade();
    
    if(parseInt(pontuacao.pontos)%5==0){
      bonus.exibe();
      bonus.move();
    }

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe();
    inimigo.move();

    if(inimigoVisivel){
      this.indice++;
      inimigo.aparece();
        
      if(this.indice > this.mapa.length - 1){
        this.indice = 0;
      }
    }

    if(personagem.estaColidindo(inimigo)){
      somColisao.play();
      vida.perdeVida();
      personagem.ficaInvencivel();   
    } else if (keyIsPressed === true && key === 'z' && personagem.estaColidindo(inimigo)){
        personagem.ficaInvencivel();
        console.log('Inimigo atingido')
        setTimeout(() => {
        inimigo.dano=true;
        }, .0000001);
        if (inimigo.dano){
          inimigo.some();
        }
      } else inimigo.dano=false;
    
    if  (keyIsPressed === true && key === 'z'){
      somSword.play();
    }

    if(bonus.x<20 && bonus.x>-13 && personagem.y<250){
      personagem.pegaBonus();
      bonus.remove();
      pontuacao.multiplicarPonto();
      somBonus.play();
    }
        
    if(vida.vidas<1){
      this.alteraCena1();
      setTimeout(function (){
        noLoop()},20000)
    }
  }
}