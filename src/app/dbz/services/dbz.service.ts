import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import{v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {id:uuid(), name: 'Goku', power: 15000 },
    {id:uuid(), name: 'Vegeta', power: 8500 },
    {id:uuid(), name: 'Krillin', power: 5000},
    {id:uuid(),name: 'Piccolo', power: 8000 },
      ];
      addCharacter(character: Character): void {
        const newCharacter :Character={
          id:uuid(),
          ...character
        }

        this.characters.push(newCharacter);
      }

     /*  onBorrarCharacter(index: number): void {
        this.characters.splice(index, 1);
      } */
      borrarCharacterById(id:string){
        this.characters=this.characters.filter((character)=>character.id!==id);
      }

}
