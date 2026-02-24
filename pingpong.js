// Bola 
let raio = 7.5;
let xBola = 100;
let yBola = 200;
let diametro = raio * 2;

//Velocidade da bola
let velocidadeXBola = 6;
let velocidadeYBola = 6;

//raquete
let xRaquete = 5;
let yRaquete = 150;

//raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//placar 
let meusPontos = 0;
let pontosOponentes = 0;

function setup(){
  createCanvas(600,400)
}

function draw(){
  
}
function movimentoBolinha(){
  circle(xBolinha,diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  if(xBolinha + raio > width || xBolinha-raio < 0){}
  if(yBolinha + raio > height || yBolinha-raio < 0){ velocidadeYBolinha *= -1}
}
function raquetes(xRaquete,yRaquete){ rect(xRaquete,yRaquete,10,90) }

  
