/*  **********************************************************
    **       BEGIN klasse Hero bij voorbeeld Levels         **
    ********************************************************** */


class Hero {
  constructor(l) {
      this.x = 100;
      this.y = 450;
      this.d = 75;
      this.v = 3 + l;
      this.kleur = 'red';
      this.heeftGesprongen = false;
      this.velY = 0; 
      this.gravity = 1; 
      this.jumpStrength = -25; 
      this.isLeft = false; //zie punt 2
      this.isRight = false; // ^^
      // Voor springen zie punt 4
  }

  beweeg() {
    if(keyIsDown(UP_ARROW) && !this.heeftGesprongen) {
        this.velY = this.jumpStrength;
        this.heeftGesprongen = true;  

    }

    // Zwaartekracht toepassen
    this.velY += this.gravity; 
    this.y += this.velY; 

    if (this.y >= 450) {
        this.y = 450; 
        this.velY = 0; 
        this.heeftGesprongen = false;
    }

    if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.v;
        this.isLeft = true;
        this.isRight = false;
    } else if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.v;
        this.isLeft = false;
        this.isRight = true;
    } else {
        // Geen beweging
        this.isLeft = false;
        this.isRight = false;
    }


    this.y = constrain(this.y, 0, 450); 
    this.x = constrain(this.x,0,canvas.width);
  }

  teken() {
    push();
    noStroke()
    if (this.isLeft) {
        image(animatieLinks[int(frameCount / 10) % animatieLinks.length], this.x, this.y, 150, 150);
    } else if (this.isRight) {
        image(animatie[int(frameCount / 10) % aantalBeeldjes], this.x, this.y, 150, 150);
    } else {
        image(stilstaan, this.x, this.y, 150, 150);
    }
    pop();
  }
}

/*  **********************************************************
    **       EINDE klasse Hero bij voorbeeld Levels         **
    ********************************************************** */