import {
  Component,
  Input,Output,EventEmitter
} from '@angular/core';
import {
  Character
} from '../../interfaces/character.interface';
@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  characterList: Character[] = [{
      name: 'Gohan',
      power: 10000
    },
    {
      name: 'Trunks',
      power: 12000
    }
  ];
  @Output()
  onBorrarCharacter: EventEmitter < string > = new EventEmitter();
  borrarCharacter(id?:string) {
    if(!id){
      return;
    }
    this.onBorrarCharacter.emit(id);
  }
}
