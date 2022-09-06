import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.css'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(10px)' })),
      ]),
    ]),
  ]
})
export class CirculoComponent implements OnInit {
  mivalor: number = 0;
  //mivalor.toFixed(1);
  mivalorG = 0.0;
  @Input() valor: any;
  onAnimationEvent(event: AnimationEvent) {

  }
  constructor() {

  }

  grafico = document.querySelector('.circulodos');
  intervalId: any;
  ngOnInit(): void {

    const animacionDos = () => {
      /*  if (this.mivalor < this.valor.nota) {
          this.mivalor++;
          console.log("mivalor " + this.mivalor.toFixed(2));
        }*/
      if (this.mivalorG < (this.valor.nota * 10)) {
        this.mivalorG++;

        this.mivalor = this.mivalor + 0.1;

      }
      if (this.mivalorG >= (this.valor.nota * 10)) {
        console.log("mivalor " + this.mivalor.toFixed(2));
        console.log("mivalorG " + this.mivalorG)
        clearInterval(this.intervalId);
      }

    }
    this.intervalId = setInterval(animacionDos, 50);
    //@fadeSlideInOut;
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
