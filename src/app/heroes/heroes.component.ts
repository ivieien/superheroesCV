import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @ViewChild('closeModal')
  closeModal!: ElementRef;

  heroToDelete: any;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  
  deleteejemp() {
    this.deleteHero(this.heroToDelete); 
    this.closeModal.nativeElement.click()
  }

  saveHero(hero: Hero) {
    this.heroToDelete = hero; 
  }
}
