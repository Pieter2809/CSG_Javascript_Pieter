class Cannon {
    constructor() {
        this.x = canvas.width;
        this.y = 435;
        this.v = 1.5;
    }

    teken() {
        if (spel.level == 6) { // Controleer of het level 6 is
            push();
            image(animatieCannon[int(frameCount / 20) % aantalCannon], this.x, this.y, 150, 150);
            pop();
        }
    }

    beweeg() { 
        this.x -= this.v;
        this.x = constrain(this.x,canvas.width-600,canvas.width)
      }
}
//NieuweInformatie
