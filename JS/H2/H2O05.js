var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos = 400;
var yJos = 300;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901,601);
  canvas.parent('processing');
  celGrootte = width / aantalKolommenRaster; /* Afmeting van cel is canvasbreedte / aantalkolommenraster = 6 -> 150.1666666*/
  background(brug);
  
}

function draw() {
  tekenRaster();
  image(spriteJos,xJos,yJos);
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  /*
  Maak hieronder een dubbele herhaling om een raster te maken.
  HINT: je kunt terugkijken naar het raster dat je in H1 hebt gemaakt.
  Maak gebruik van de variabelen die bovenaan zijn gedeclareerd.
  */
  for(var b=0; b<aantalRijenRaster; b++){
  for(var n=0; n<aantalKolommenRaster; n++){
    rect(n*celGrootte,b*celGrootte,celGrootte,celGrootte);
  } 
  }
  pop()
}