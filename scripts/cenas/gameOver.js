class GameOver {
    constructor() {
      this.x = width / 2;
      this.y = height;

    }
  
    draw() {
      this._fundo()
      this._texto()
    }
    
    _fundo() {
      image(imagemGameOver, 0, 0, width*1.05, height)
    }
    
    _texto() {
      fill(0);
      strokeWeight(2);
      stroke(245, this.opacity);
      textAlign(CENTER);
      textSize(250);
      textFont(fonteGameOver)
      if(frameCount % 60 < 30){
      frameRate(80);
        text("GAME OVER",width / 2, height / 2.5)
        textFont(fonteTexto)
        textSize(35);
        text("\n\n\n\n\n\n\n\n  Loser! Shame on you\n The virus is still out there.",width / 2, height / 7)
      }
    }
  }