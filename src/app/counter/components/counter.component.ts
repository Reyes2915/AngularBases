import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
  Contador:{{contador}}
  <button (click)="Aumentar(-1)">-1</button>
  <button (click)="Aumentar(1)">+1</button>
  <br>
  <button (click)="Resetear()">Reset</button>
  `
})
export class CounterComponent {
 contador:number=10;
  Aumentar(value:number): void {
    this.contador+=value;
  }
  Resetear(): void {
    this.contador=10;
  }
}
