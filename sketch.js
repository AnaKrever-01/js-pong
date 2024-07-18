//variavéis da bolinha
let xBolinha = 320;
let yBolinha = 245;
let diametro = 26;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//variavéis da raquete
let xRaquete = 8;
let yRaquete = 180;
let comprimentoRaquete = 8;
let alturaRaquete = 90;


//variavéis  do oponente
let xRaqueteOponente = 632;
let yRaqueteOponente = 180;
let velocidadeYOponente;

let colidiu = false;
let chanceDeErrar = 0;

//placar do jogo
let pontosMeus     = 0;
let pontosOponente = 0;

//sons do jogo;
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto  = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(650, 480);
  trilha.loop();
}

function draw() {
  background(10);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  ColisaoBiblioteca(xRaquete, yRaquete);
  //verificaColisaoRaquete();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  //movimentaRaqueteOponente();
  ColisaoBiblioteca(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete2();
  incluiPlacar();
  marcaPonto();
  //calculaChanceDeErrar();
}
function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
   if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  
   if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x,y){
   rect (x, y, comprimentoRaquete, alturaRaquete);
}
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete
&& yBolinha - raio < yRaquete + alturaRaquete
&& yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function ColisaoBiblioteca(x,y){
  colidiu = 
  collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente -
comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}
function movimentaRaquete2(){
  if  (keyIsDown(87)) {
    yRaqueteOponente -= 10;
  }
  if  (keyIsDown(83)) {
    yRaqueteOponente += 10;
  }
}
function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(157, 10, 40, 20);
  fill(255);
  text(pontosMeus, 177, 26);
  fill(color(255, 140, 0));
  rect(493, 10, 40, 20);
  fill(255);
  text(pontosOponente, 513, 26);
}
function marcaPonto(){
  if (xBolinha > 634){
    pontosMeus += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}
function calculaChanceDeErrar() {
  if (pontosOponente >= pontosMeus) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

//function bolinhaNaoFicaPresa(){
    if (xBolinha + raio < 0){
    console.log('bolinha ficou presa');
    xBolinha = 300;
    }
}

//function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}