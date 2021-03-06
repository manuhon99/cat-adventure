class Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
      this.matriz = matriz;
      this.imagem = imagem;
      this.largura = largura;
      this.altura = altura;
      this.x = x;
      this.variacaoY = variacaoY;
      this.y = height - this.altura - this.variacaoY;
      this.larguraSprite = larguraSprite;
      this.alturaSprite = alturaSprite;
      this.dano = false;
      this.frameAtual = 0;
    }
    
    exibe(){
      if (!this.dano){
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);   
      }
      else{
        image(imagemInimigoNull, 0, 0, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite)   
      }
      this.anima();
    }

    some(){
      console.log('Inimigo atingido')
    }

    anima(){
      this.frameAtual++
      if(this.frameAtual >= this.matriz.length - 1) {
        this.frameAtual = 0
      }
    }
  }