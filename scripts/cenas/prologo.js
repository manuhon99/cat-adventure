class Prologo {
    constructor() {
      this.x = width / 2;
      this.y = height;      
      texto = "'My human is lockded in about 90 days.\nThere is a virus out there. \nIf I could do something...\n That's it! I will seek this virus, \ndestroy it, and free my human.'\n\n\n\n\nPress x to continue"
      texto1 = "Capitu is a cat. She sees everthing that moves how an enemy. \n You must avoid or try to defeat them \n(Arrow up for jump / z for hit). \n\n She loves Friskies, try to get it to become temporarily invencible.\n You will be able to see and finish the virus life on phase two. \n\n May the Aslam force be with you!"
      textTemp = texto;
      textos.push(texto)
      textos.push(texto1)
    }
  
    draw() {
      this._fundo()
      this._texto()
      this._botao()
    }
    
    _fundo() {
        image(imagemTelaPrologo, 0, 0, width, height)
    }

    musica(){

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
      text(textTemp, width / 2, height / 7.5)
      }if (keyIsPressed === true && key === 'x')
      {
        for(let i = 0; i<2; i++){
          textTemp = textos[i]
          console.log(i+textos[i])     
        }   
      }
    }

    _botao() 
    {
      botaoOk.y = height/1.15
      botaoOk.x = width/1.15
      botaoOk.draw()
    }
  }