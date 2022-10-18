import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Spiderman' },
      { id: 2, name: 'Superman' },
      { id: 3, name: 'Batman' },
      { id: 4, name: 'Dr. Strange' },
      { id: 5, name: 'IronMan' },
      { id: 6, name: 'Hulk' },
      { id: 7, name: 'Aquaman' },
      { id: 8, name: 'Captain America' },
      { id: 9, name: 'Green Lantern' }
    ];
    return {heroes};
  }
  
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
