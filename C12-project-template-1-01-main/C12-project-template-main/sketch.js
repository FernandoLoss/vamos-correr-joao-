var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var boy;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","JAKE4.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path = createSprite(200,180,400,20);
path.scale=1.2;
path.addImage(pathImg);

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy = createSprite(50,160,20,50);
boy.scale=1;
boy.addAnimation("run", boyImg);
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);

//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false;
}



function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  boy.x=World.mouseX;

  drawSprites();
}
