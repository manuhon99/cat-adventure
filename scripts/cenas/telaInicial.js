class TelaInicial {
    constructor() {
      this.x = width / 2;
      this.y = height
    }
  
    draw() {
      this._fundo()
      this._texto()
      this._botao()
    }

    _fundo() {
        image(imagemTelaInicial, 0, 0, width, height)
        filter(GRAY)
    }
    
    _texto() {
      fill(150);
      strokeWeight(2);
      stroke(245, this.opacity);
      textAlign(CENTER);
      textSize(60);
      textFont(fonteTelaInicial);
      if(frameCount % 60 < 30){
        frameRate(80);
        text("Capitu's Adventure", width / 2, height / 2.7);
        textSize(90);
        text('Seek and destroy', width / 2, height / 5 * 2.5);
        textFont('Georgia')
      }
    }
    
    _botao() {
      botaoGerenciador.y = height / 7 * 5
      botaoGerenciador.draw()
    }
  }