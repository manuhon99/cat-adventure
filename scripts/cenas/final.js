class Final {
    constructor() {
      this.x = width / 2;
      this.y = height;

    }
  
    draw() {
      this._fundo()
      this._texto()
    }
    
    _fundo() {
      image(imagemFinal, 0, 0, width, height)
    }
    
    _texto() {
      fill(0);
      strokeWeight(2);
      stroke(245, this.opacity);
      textAlign(CENTER);
      textSize(35);
      textFont(fonteTexto)
      if(frameCount % 60 < 30){
      frameRate(100);
        text("Capitu's sought and destroyed, \nthe virus was defeat! \n\nYour human are free now! \n\n\n\n chupa micróbio do caralho",width / 2, height / 7)
        textSize(55);
        text("THE END",width / 2, height / .5)
      }
    }
  }