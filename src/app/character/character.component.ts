import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';
import * as moment from 'moment';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input()
  character: Character;

  constructor() { }

  ngOnInit(): void {
  }

  get createdDate(): string {
    return moment(this.character.created).fromNow();
  }

}
