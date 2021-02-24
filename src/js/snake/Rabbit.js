import {percents} from '@/js/helpers';
import anime      from 'animejs';

export default class Rabbit {
  constructor(level, cell) {
    this.level = level;
    this.cell  = cell;
    
    this.health        = 99.999999;
    this.nutritionally = 500 * this.level * 2;
    
    const nutritionally = this.nutritionally;
    
    this.healthInterval = setInterval(() => {
      anime.remove(this);
      
      anime({
        targets:       this,
        health:        this.health - percents(this.health, 10),
        nutritionally: percents(nutritionally, this.health),
        duration:      700,
        easing:        'easeOutExpo',
        complete:      () => {
          if (this.health <= 10) {
            this.destroy();
          }
        }
      });
      
    }, 900);
  }
  
  destroy() {
    clearInterval(this.healthInterval);
    this.cell.rabbit = null;
  };
}