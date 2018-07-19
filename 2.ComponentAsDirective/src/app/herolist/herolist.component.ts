import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit {
pageTitle:string ='Indian Super Heros';
heroes:any[];
  constructor() { }

  ngOnInit() {
    this.heroes=[{heroId:'1',heroName:'Sachin',sports:'Cricket',heroNature:'Calm'},
    {heroId:'2',heroName:'PV Sindhu',sports:'Shuttle',heroNature:'Aggressive'},
    {heroId:'3',heroName:'Saina',sports:'Shuttle',heroNature:'Intelligent'},
    {heroId:'4',heroName:'Sunil',sports:'Football',heroNature:'Fast Runner'},
  ];

  }

}
