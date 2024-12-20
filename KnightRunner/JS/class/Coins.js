/*  **********************************************************
    **      BEGIN klasse Coins bij voorbeeld Levels        **
    ********************************************************** */


    class Coins {
        constructor() {
            this.x = random(50,canvas.width - 75);
            this.y = 500;
            this.d = 60;
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
            image(animatieMunt[int(frameCount / 7) % aantalMunt], this.x, this.y, 50, 50);
            pop();
        }
      }
      
      /*  **********************************************************
          **       EINDE klasse Coins bij voorbeeld Levels       **
          ********************************************************** */