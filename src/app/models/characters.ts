import { Character } from './character';

export class Characters {
  info: Info;
  results: Character[];
}

class Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
