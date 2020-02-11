import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Characters } from '../models/characters';
import { switchAll, debounceTime, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnChanges {

  @Input() query: string;

  characters: Characters;

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters()
      .subscribe(x => this.characters = x);
  }

  ngOnChanges(change: SimpleChanges): void {
    of(change.query.currentValue)
      .pipe(
        debounceTime(300),
        map(x => x || null),
        map(x => this.characterService.getCharacters(x)),
        switchAll())
      .subscribe(x => this.characters = x);
  }

}
