import { Injectable } from '@angular/core';
import { Characters, CharacterInfo } from '../models/characters';
import { Character } from '../models/character';
import { Observable, of } from 'rxjs';
import { LocationRef } from '../models/location-ref';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  getCharacters(): Observable<Characters> {
    return of(characters);
  }

}

const characters = {
  info: {
    count: 2,
    pages: 1,
    next: '',
    prev: ''
  } as CharacterInfo,

  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
      } as LocationRef,
      location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20'
      } as LocationRef,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episodes: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/13',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/17',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/24',
          'https://rickandmortyapi.com/api/episode/25',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/27',
          'https://rickandmortyapi.com/api/episode/28',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31'
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z'
  },
  {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
      },
      location: {
          name: 'Earth (Replacement Dimension)',
          url: 'https://rickandmortyapi.com/api/location/20'
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episodes: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
          'https://rickandmortyapi.com/api/episode/3',
          'https://rickandmortyapi.com/api/episode/4',
          'https://rickandmortyapi.com/api/episode/5',
          'https://rickandmortyapi.com/api/episode/6',
          'https://rickandmortyapi.com/api/episode/7',
          'https://rickandmortyapi.com/api/episode/8',
          'https://rickandmortyapi.com/api/episode/9',
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/11',
          'https://rickandmortyapi.com/api/episode/12',
          'https://rickandmortyapi.com/api/episode/13',
          'https://rickandmortyapi.com/api/episode/14',
          'https://rickandmortyapi.com/api/episode/15',
          'https://rickandmortyapi.com/api/episode/16',
          'https://rickandmortyapi.com/api/episode/17',
          'https://rickandmortyapi.com/api/episode/18',
          'https://rickandmortyapi.com/api/episode/19',
          'https://rickandmortyapi.com/api/episode/20',
          'https://rickandmortyapi.com/api/episode/21',
          'https://rickandmortyapi.com/api/episode/22',
          'https://rickandmortyapi.com/api/episode/23',
          'https://rickandmortyapi.com/api/episode/24',
          'https://rickandmortyapi.com/api/episode/25',
          'https://rickandmortyapi.com/api/episode/26',
          'https://rickandmortyapi.com/api/episode/27',
          'https://rickandmortyapi.com/api/episode/28',
          'https://rickandmortyapi.com/api/episode/29',
          'https://rickandmortyapi.com/api/episode/30',
          'https://rickandmortyapi.com/api/episode/31'
      ],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z'
  },
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1'
    } as LocationRef,
    location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20'
    } as LocationRef,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episodes: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/17',
        'https://rickandmortyapi.com/api/episode/18',
        'https://rickandmortyapi.com/api/episode/19',
        'https://rickandmortyapi.com/api/episode/20',
        'https://rickandmortyapi.com/api/episode/21',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/23',
        'https://rickandmortyapi.com/api/episode/24',
        'https://rickandmortyapi.com/api/episode/25',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/28',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31'
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z'
},
{
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episodes: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/17',
        'https://rickandmortyapi.com/api/episode/18',
        'https://rickandmortyapi.com/api/episode/19',
        'https://rickandmortyapi.com/api/episode/20',
        'https://rickandmortyapi.com/api/episode/21',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/23',
        'https://rickandmortyapi.com/api/episode/24',
        'https://rickandmortyapi.com/api/episode/25',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/28',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31'
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z'
}
  ] as Character[]
} as Characters;
