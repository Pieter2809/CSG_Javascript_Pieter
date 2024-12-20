/*  **********************************************************
    **      BEGIN klasse Vijand                             **
    ********************************************************** */


class Vijand {
  constructor(l) {
      this.x = canvas.width - 100;
      this.y = random(425,530);
      this.d = 100; 
      this.v = 3 + random (2*l);
      this.kleur = 'blue';
  }

  beweeg() {
    this.x -= this.v;
  }

  raakt(s) {
      if (dist(this.x,this.y,s.x,s.y) <= (this.d + s.d) / 2) {
          return true;
      }
      else {
          return false;
      }
  }

  teken() {
      push();
      image(animatievuurbal[int(frameCount / 10) % aantalVuurbal], this.x, this.y, 80, 40);
      pop();
  }
}

/*  **********************************************************
    **       EINDE klasse Vijand                            **
    ********************************************************** */