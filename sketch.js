let pCero = 0
let pUno = 125
let pDos = 250
let pTres = 375
let pCuatro = 500

let angulo = 0.0;
var desplazamiento = 1;
var escalar = 60;
var velocidad = 0.05;

function setup() {
  createCanvas(500, 500);
  background(0);
  push()
  stroke(0)
  line(pUno,pUno,pTres,pUno)
  pop() }

function draw() {
  
  //console.log("X: " + mouseX + " Y:" + mouseY);
  background(0);
  // lineas fondo verticales
    stroke(250)
  strokeWeight(5)
  for (var x = 50; x < 451; x += 50 ){
    if(keyIsPressed === true)
  line (x,50,x,450)
  }
  //lineas fondo horizontales
   
   stroke(250)
  strokeWeight(5)
   for (var y = 50; y < 451; y += 50 ){
    if(mouseIsPressed)
     line (50,y,450,y)
  }
   stroke(20)
  strokeWeight(3)
  //---------------------------------------------
    push()
translate(125,125)
 fill(0,0,255)
  if(mouseIsPressed)
    fill(255,0,0)
    var x = desplazamiento + cos(angulo) * escalar;
   var y = desplazamiento + sin(angulo) * escalar;
  ellipse(x,y,50,50)   
   angulo += velocidad;
pop()
      push()
translate(375,375)
 fill(255,0,0)
  if(mouseIsPressed)
    fill(0,0,255)
    var x = desplazamiento + cos(angulo) * escalar;
   var y = desplazamiento + sin(angulo) * escalar;
  ellipse(x,y,50,50)   
   angulo += velocidad;
pop()
 
  //______________________________________________
    //triangulos principales
  push()
  fill(255,0,0,frameCount)
  if (mouseIsPressed){
 fill(0,0,255)}  triangle(pUno,pUno,175,pTres,75,pTres);
  fill(0,0,255,frameCount)
  if(mouseIsPressed){
  fill(255,0,0)}
triangle(pTres,pTres,425,pUno,325,pUno);
 pop()
  // figuras al cursor x y
  fill(0,0,255)
if (mouseX < pDos){ 
  ellipse(mouseX,mouseY,50,50)
  fill(255,0,0)
  ellipse(mouseX,mouseY,25,25)}
  
  fill(255,0,0)
if (mouseX > pDos){
    ellipse(mouseX,mouseY,50,50)
  fill(0,0,255)
    ellipse(mouseX,mouseY,25,25)}
 
 }
