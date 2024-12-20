var animatie = [];
var animatievuurbal = [];
var achtergrondVernieuwing = [];
var animatieLinks = [];
var animatieMunt = [];
var animatieCannon = [];
var achtergrondTussenLevel = [];
var aantalBeeldjes = 2;
var aantalVuurbal = 2;
var aantalAchtergrond = 7;
var aantalMunt = 12;
var aantalCannon = 2;
var aantalTussenLevel = 6;
var lopenLinks = 4;
var nummer = 0;
var muntjes = [];
var muntjesTeller = 0;
function preload() {
    achtergrondmuziek = loadSound("sounds/bensound-groovyhiphop.mp3");
    schermbegin = loadImage("Images/schermbeginveind4.png");
    chase = loadSound("sounds/screamchase.MP3");
    achtergrondBuiten = loadImage("Images/achtergrond .png");
    stilstaan = loadImage("SpriteKnight/stilstaanVooruit.png");
    missieMislukt = loadImage("Images/missiemisluktv2.png");
    missieGeslaagd = loadImage("Images/missiegeslaagdv2.png");
    logo = loadImage("Images/logo.png");

//ANIMATIELOPENKNIGHTNAARRECHTS
    for (var b = 0;b < aantalBeeldjes;b++) {
        nieuw_beeldje = loadImage("SpriteKnight/frame("+ b +").png");
        animatie.push(nieuw_beeldje);
   }

//ANIMATIELOPENKNIGHTNAARLINKS
  for (var d = 2;d < lopenLinks;d++) {
    nieuw_beeldje_lopen_links = loadImage("SpriteKnight/frame("+ d +").png");
    animatieLinks.push(nieuw_beeldje_lopen_links);
  }
//ANIMATEIVUURBAL
  for (var a = 0;a < aantalVuurbal;a++) {
    nieuw_beeldjevuurbal = loadImage("SpriteFireball/frame("+ a +").png");
    animatievuurbal.push(nieuw_beeldjevuurbal);
  }

//ACHTERGRONDVERNIEUWING
  for (var c = 0;c < aantalAchtergrond;c++) {
    nieuw_beeldjeachtergrond = loadImage("Images/achtergrond("+ c +").png");
    achtergrondVernieuwing.push(nieuw_beeldjeachtergrond);
  }

  //ANIMATIEMUNT
  for (var e = 0;e < aantalMunt;e++) {
    nieuw_beeldjemunt = loadImage("SpriteCoin/munt("+ e +").png");
    animatieMunt.push(nieuw_beeldjemunt);
  }

  //ANIMATIECANNON
  for (var f = 0;f < aantalCannon;f++) {
    nieuw_beeldjecannon = loadImage("SpriteCannon/frame("+ f +").png");
    animatieCannon.push(nieuw_beeldjecannon);
  }

//NIEUWTUSSENBEELD PER LEVEL
for (var g = 0;g < aantalTussenLevel;g++) {
  nieuw_beeldjetussenlevel = loadImage("tussenlevel/frame("+ g +").png");
  achtergrondTussenLevel.push(nieuw_beeldjetussenlevel);
}
  
  
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(RGB,255,255,255,1);
    textFont("Monospace");
    textSize(44);
    textAlign(CENTER,CENTER);  
    frameRate(60);
    spel = new DungeonsCry();
    spel.nieuwSpel();
    
}

function draw() {
    if (spel.actief && !spel.levelGehaald) {
        spel.update();
    }
    spel.teken();
}

function keyTyped() {
  if (!spel.actief && !spel.levelGehaald) {
    // begin spel
    spel.actief = true;
    chase.loop();

  }
  if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
    // level gehaald tijdens het spel
    spel.nieuwLevel();
  }
  if ((spel.afgelopen) && keyCode == 32) {
    // einde spel => 32 = ENTER 
    chase.stop();
    spel.nieuwSpel();
  }  
}