/*  **********************************************************
    **                 BEGIN klasse DungeonsCry             **
    ********************************************************** */

class DungeonsCry {
    constructor() {
    this.level = null;
    this.maxLevel = 6;
    this.actief = null;
    this.levelGehaald = null;
    this.afgelopen = null;
    this.gewonnen = null;
    this.speler = null;
    this.vijanden = null;
    this.raak = 0;
    this.huidigeScoreboardAfbeelding = null; // Zie punt 1
    this.huidigeTussenLevel = null; // Zelfde soort manier gebruikt als in punt 1, hiervoor niet verder chat gpt gebruikt om het tussenscherm tussen levels te laten werken.
    
  }
  
  nieuwSpel() {
    this.level = 0;
    this.actief = false;
    this.gewonnen = false;
    this.afgelopen = false;
    muntjes = []; // zie punt 5
    muntjesTeller = 0; // ^^
    this.nieuwLevel();
    
  }

  nieuwLevel() {
    this.level++;
    this.levelGehaald = false;
    this.speler = new Hero(this.level);
    this.vijanden = [];
    for (var v = 0; v <= this.level*1; v++) {
        this.vijanden.push(new Vijand(this.level));
    }

    
    for (var i = 0; i < 5; i++) { 
      muntjes.push(new Coins(this.level));
    }

    this.huidigeScoreboardAfbeelding = achtergrondVernieuwing[this.level]; // zie punt 1
    this.huidigeTussenLevel = achtergrondTussenLevel[this.level] 
    this.cannon = new Cannon();

  }

  update() {
    for (var v = 0; v < this.vijanden.length; v++) {
        this.vijanden[v].beweeg();
        if (this.vijanden[v].raakt(this.speler)) {
            spel.afgelopen = true;
            spel.actief = false;
            this.raak++;
        }
    }
    this.speler.beweeg();

    for (var i = muntjes.length - 1; i >= 0; i--) { // Zie punt 5
      if (muntjes[i].raakt(this.speler)) {
          muntjes.splice(i, 1); //
          muntjesTeller++; //
      }
  }


    if (this.speler.x >= canvas.width - 100) {
        this.levelGehaald = true;
        if (this.level == this.maxLevel) {
            spel.afgelopen = true;
            spel.gewonnen = true;
            spel.actief = false;
        }
    }

    if (
      this.cannon &&
      this.level === 6 &&
      Math.abs(this.cannon.x - this.speler.x) <= 50 && // Zie punt 3
      mouseIsPressed && mouseButton === LEFT 
      ) 
        {
      spel.gewonnen = true; 
      spel.afgelopen = true;
      spel.actief = false;
      }


  }

   tekenSpeltoestand() {
    this.cannon.teken();
    this.speler.teken();
    for (var v = 0; v < this.vijanden.length; v++) {
          this.vijanden[v].teken();
    } 
    
    for (var i = 0; i < muntjes.length; i++) { // Zie punt 2
      muntjes[i].teken();
    }

    this.cannon.beweeg();
    
    if (muntjesTeller > 25) {
      this.speler.jumpStrength = -30; 
    }

  }

  tekenScorebord() {
    push();
    fill(0,0,0,.8);
    noStroke();
    textSize(30);
    var marge = 25;
    if (this.huidigeScoreboardAfbeelding) { //Zie punt 1
      image(this.huidigeScoreboardAfbeelding, 0, 0, canvas.width, canvas.height - 2 * marge);
    }
    image(logo,15,canvas.height-125,100,100)
    fill(255);
    text(" Level "+this.level,25,500,canvas.width - 2 * marge,canvas.height - 5 * marge);  
    text("Muntjes: " + muntjesTeller, 25, 450, canvas.width - 2 * marge, canvas.height - 5 * marge); 
    pop();
    
  }
  
  beginScherm() {
    push();
    image(schermbegin,0,0,canvas.width,canvas.height);
    pop();
  }

  levelScherm() {
    push();
    if (this.huidigeTussenLevel) {
      image(this.huidigeTussenLevel, 0, 0, canvas.width, canvas.height);
    }
    pop();
  }   

  eindScherm() {
    if (this.gewonnen) {
      image(missieGeslaagd,0,0,canvas.width,canvas.height)
    }
    else {
        image(missieMislukt,0,0,canvas.width,canvas.height)
    }
  }    
  
  teken() {
    background(34,34,34);
    if (!this.actief) {
        if (this.afgelopen) {
            this.eindScherm();
        }
        else {
            this.beginScherm();
        }
    }
    else {
        if (this.levelGehaald) {
            this.levelScherm();
        }
        else {
            this.tekenScorebord();
            this.tekenSpeltoestand();
        }
    }
  }
}

/*  **********************************************************
    **                 EINDE klasse DungeonsCry             **
    ********************************************************** */