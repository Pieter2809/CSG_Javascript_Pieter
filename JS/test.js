var xpos = 410;

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('#012345');
  noStroke();
  fill('#654321');
  rect(0,350,450,100);
 
  for (var n = 1;n <= 4;n++) {
    fill('#FF00FF');
    ellipse(xpos,310,80);
    translate(0,-85,0)
    if (mouseIsPressed == true){
    xpos -=1;
    xpos = constrain(xpos,60,450)
    }
  
  }
  
}