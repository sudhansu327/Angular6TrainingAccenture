import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getIndianHeroes():any{
    return [{heroId:'1',heroName:'Sachin',sports:'Cricket',heroNature:'Calm',imageUrl:'./assets/sachin.jpg'},
    {heroId:'2',heroName:'PV Sindhu',sports:'Shuttle',heroNature:'Aggressive',imageUrl:'./assets/pvsindhu.jpg'},
    {heroId:'3',heroName:'Saina',sports:'Shuttle',heroNature:'Intelligent',imageUrl:'./assets/Saina.jpg'},
    {heroId:'4',heroName:'Sunil',sports:'Football',heroNature:'Fast Runner',imageUrl:'./assets/sunil.jpg'},
    {heroId:'5',heroName:'Virat',sports:'Cricket',heroNature:'Very Aggressive',imageUrl:'./assets/virat.jpg'},
  ];
  }
}
