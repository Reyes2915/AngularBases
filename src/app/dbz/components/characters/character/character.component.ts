import { Character } from './../../../interfaces/character.interface';
import {
  Component,EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-character-dbz',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
 @Output()
 onNewCharacter: EventEmitter<Character> = new EventEmitter();



  public personaje: Character = {
    name: '',
    power:0
  }
  emitCharacter():void{
    console.log(this.personaje);
    if(this.personaje.name.length === 0){
      return;
    }
    this.onNewCharacter.emit(this.personaje);
    this.personaje = {
      name: '',
      power:0
    }
  }
}
