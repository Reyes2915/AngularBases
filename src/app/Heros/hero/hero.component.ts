import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string = 'Ironman';
  public edad: number = 45;
  public metodo: string = "Traje de Ironman";
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  getdescripcionHeroe(): string {
    return `${this.nombre} - ${this.edad} - ${this.metodo}`;
  }
  cambiarNombre(): void {
    let arrayHeroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Capitan America'];
    this.nombre = arrayHeroes[Math.floor(Math.random() * arrayHeroes.length)];
  }
  cambiarEdad(): void {
    let nuevaEdad = Math.floor(Math.random() * (100 - 20 + 1) + 20);
    if (nuevaEdad == this.edad) {
      this.cambiarEdad();
    }else{
      this.edad = nuevaEdad;
    }
  }
  resetForm():void{
    this.nombre = 'Ironman';
    this.edad = 45;
    this.metodo = "Traje de Ironman";
  }
}
