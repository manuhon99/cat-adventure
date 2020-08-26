class Fase2 {
  constructor(){
      this.indice = 0;
      this.mapa = fita.mapa1;
  }
    
  setup(){
    frameRate(8);
    cenario1 = new Cenario(imagemCenario1, 3);
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    vidaChefao = new Chefao(10, 10);
    final = new Final();
    gameOver = new GameOver();
   
    personagem = new Personagem(matrizNinja, imagemPersonagens, 0, 110, 150, 150, 300, 300);    
    personagem1 = new Personagem(matrizNinja, imagemPersonagens, 0, 110, 150, 150, 300, 300);    
    personagemAtacando = new Personagem (matrizPersonagemAtacando, imagemPersonagemAtacando, 0, 110, 150, 150, 300, 300);
    
    bonus = new Bonus(imagemBonus, 10);

    inimigoVirus = new Inimigo(matrizInimigoVirus, imagemInimigoVirus, 0, 110, 139, 140, 278, 280, 15);
    
    inimigos.push(inimigoVirus);

  }

  alteraCena() {
    cenaAtual = 'final'
  }

  alteraCena1() {
    cenaAtual = 'gameOver'
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

  draw(){
    cenario1.exibe()
    cenario1.move()

    vida.draw()
    vidaChefao.draw();
    pontuacao.adicionarPonto()
        
    personagem.exibe();
    personagem.aplicaGravidade();
    
    if(parseInt(pontuacao.pontos)%2==0){
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
    
    if (linhaAtual.inimigo==4){
      if (inimigo.x < 30 && inimigo.x > 5 && keyIsPressed === true && key === 'z'){
        somSword.play();
        personagem.ficaInvencivel();
        console.log('Virus atingido')
        vidaChefao.perdeVida();
      }
    }

    if(bonus.x<20 && bonus.x>-13 && personagem.y<250){
      personagem.pegaBonus();
      bonus.remove();
      somBonus.play();
      vida.ganhaVida();
      vida.ganhaVida();
    }
    
    if(vida.vidas<1){
      this.alteraCena1();
      setTimeout(function (){
        noLoop()},20000)
    }

    if(vidaChefao.vidas<1){
      this.alteraCena()      
      setTimeout(function (){
        noLoop()},20000)
    }
  }
}