import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = "Mi primera app de Angular";
  public contador: number = 10;
  Aumentar(value:number): void {
    this.contador+=value;
  }
  Resetear(): void {
    this.contador=10;
  }
}
