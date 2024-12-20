class Knight {
    constructor(l) {
        this.x = 100;
        this.y = random(100,canvas.height - 100);
        this.d = 75;
        this.v = 3 + l;
        this.kleur = 'red';
    }
  
    beweeg() {
      if(keyIsDown(DOWN_ARROW)) {
          this.y += this.v;
      }
      if(keyIsDown(UP_ARROW)) {
          this.y -= this.v;
      }
      if(keyIsDown(LEFT_ARROW)) {
          this.x -= this.v;
      }
      if(keyIsDown(RIGHT_ARROW)) {
          this.x += this.v;
      }       
      this.x += this.v;
      // dit werkt niet?? this.y = constrain(this.y, this.d / 2, canvas.height - this.d / 2); 
    }
  
    teken() {
        push();
        noStroke();
        fill(this.kleur);
        ellipse(this.x,this.y,this.d);
        pop();
    }
  }