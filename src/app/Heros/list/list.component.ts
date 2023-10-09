import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public nombreHeroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Capitan America'];
  public heroeBorrado?: string = '';
  borrarUltimoHeroe(): void {
    this.heroeBorrado=this.nombreHeroes.pop();
  }
}
