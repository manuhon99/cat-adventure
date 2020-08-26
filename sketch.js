function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(40);
	getAudioContext().resume();
	jogo = new Jogo();
	fase2 = new Fase2();
	jogo.setup();
	telaInicial = new TelaInicial();
	prologo = new Prologo();
	final = new Final();
	gameOver = new GameOver();
	cenas = {
		jogo,
		telaInicial,
		prologo,
		fase2,
		final,
		gameOver
	};
	botaoGerenciador = new BotaoGerenciador('Start', width/2, height/2);
	botaoOk = new BotaoOk('Start game', width/2, height/2);
}

function keyPressed(){
	jogo.keyPress(key);
}

function draw() {
	cenas[cenaAtual].draw();
	if (!somInicial.isPlaying() && (cenaAtual==='telaInicial' || cenaAtual==='prologo' || cenaAtual==='jogo')){
		somInicial.play();
	} 

	if (cenaAtual==='fase2' && !somCenario1.isPlaying()){
		somInicial.stop();
		somCenario1.play();
	} 

	if (cenaAtual==='final' && !somVictory.isPlaying()){
		somCenario1.stop();
		somInicial.stop();
		somVictory.play();
	} 

	if (cenaAtual==='gameOver' && !somLoser.isPlaying()){
		somCenario1.stop();
		somInicial.stop();
		somLoser.play();
	} 
}