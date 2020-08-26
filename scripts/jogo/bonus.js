class Bonus {
  constructor(imagem,velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x = width-200;
  }
  
  exibe() {
    image(this.imagem, this.x, 300, 150, 86);
  }
  
  move() {
      this.x = this.x - this.velocidade;
      if (this.x < -width){
        this.x = width-200;
      }
  }

  remove() {
    this.x = -width-100;
  }
}