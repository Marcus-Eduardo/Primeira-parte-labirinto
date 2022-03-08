var paredes;
var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10
var parede11, parede12, parede13, parede14, parede15, parede16, parede17, parede18, parede19, parede20
var parede21, parede22, parede23, parede24, parede25, parede26, parede27, parede28, parede29, parede30

var boneco;

var fim;
function setup() {
  paredes = new Group();
  createCanvas(600, 600);

  boneco = createSprite(20, 20, 20, 20);

  //verticais:
  parede1 = createSprite(295, 380, 5, 320);
  parede2 = createSprite(400, 290, 5, 390);
  parede3 = createSprite(295, 56, 5, 176);
  parede4 = createSprite(550, 490, 5, 240);
  parede5 = createSprite(482, 240, 5, 295);
  parede6 = createSprite(140, 160, 5, 315);
  parede7 = createSprite(120, 475, 5, 112);
  parede8 = createSprite(60, 295, 5, 100);
  parede9 = createSprite(60, 460, 5, 80);
  parede10 = createSprite(141, 395, 5, 45);
  parede11 = createSprite(345, 550, 5, 120);
  parede12 = createSprite(222, 109, 5, 75);
  parede13 = createSprite(50, 580, 5, 50);
  parede14 = createSprite(482, 65, 5, 52);
  //horizontais:
  parede15 = createSprite(30, 115, 60, 5);
  parede16 = createSprite(98, 247, 80, 5);
  parede17 = createSprite(100, 419, 220, 5);
  parede18 = createSprite(25, 555, 55, 5);
  parede19 = createSprite(183, 315, 90, 5);
  parede20 = createSprite(250, 500, 93, 5);
  parede21 = createSprite(340, 417, 118, 5);
  parede22 = createSprite(243, 250, 100, 5);
  parede23 = createSprite(181, 145, 85, 5);
  parede24 = createSprite(390, 93, 190, 5);
  parede25 = createSprite(435, 485, 75, 5);
  parede26 = createSprite(575, 370, 55, 5);
  parede27 = createSprite(510, 300, 60, 5);
  parede28 = createSprite(575, 240, 60, 5);
  parede29 = createSprite(510, 160, 60, 5);
  parede30 = createSprite(575, 93, 60, 5);


  paredes.add(parede1)

  fim = createSprite(350,5,50,10)
}


function draw() {
  background(255, 255, 255);
  
  boneco.velocityX = 0;
  boneco.velocityY = 0;


  if (keyDown("down")) {
    boneco.velocityY = 5
  }
  if (keyDown("up")) {
    boneco.velocityY = -5
  }
  if (keyDown("right")) {
    boneco.velocityX = 5
  }
  if (keyDown("left")) {
    boneco.velocityX = -5
  }
  drawSprites();
}
