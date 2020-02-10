import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Characters } from '../models/characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Characters;

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {

    this.characterService.getCharacters()
      .subscribe(x => {
        this.characters = x;
      });

  }

}
