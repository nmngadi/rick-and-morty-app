import { LocationRef } from './location-ref';

export class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationRef;
  location: LocationRef;
  image: string;
  episodes: string[];
  url: string;
  created: string;
}
