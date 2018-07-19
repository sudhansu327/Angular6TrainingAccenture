import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent implements OnInit{
pageTitle:string ='Indian Super Heros';
heroes:any[];
filterByName:string;
checkValue:boolean;
selectedRadio:string;
showImage:boolean=true;
imageWidth:any=150;
imageHeight:any=150;


  constructor() { }
ngOnInit(){
  this.filterByName='Naren';
  this.checkValue=true;
  this.selectedRadio='Male';

  this.heroes=[{heroId:'1',heroName:'Sachin',sports:'Cricket',heroNature:'Calm',imageUrl:'./assets/sachin.jpg'},
    {heroId:'2',heroName:'PV Sindhu',sports:'Shuttle',heroNature:'Aggressive',imageUrl:'./assets/pvsindhu.jpg'},
    {heroId:'3',heroName:'Saina',sports:'Shuttle',heroNature:'Intelligent',imageUrl:'./assets/Saina.jpg'},
    {heroId:'4',heroName:'Sunil',sports:'Football',heroNature:'Fast Runner',imageUrl:'./assets/sunil.jpg'},
    {heroId:'5',heroName:'Virat',sports:'Cricket',heroNature:'Very Aggressive',imageUrl:'./assets/virat.jpg'},
  ];
}

toggleImage(){
  this.showImage=!this.showImage;
}

  onTextBoxChange():void{
    alert(this.filterByName);
  }
  onCheckBoxChange():void{
    alert(this.checkValue);
  }
  onRadioChange(){
    alert(this.selectedRadio);
  }
}
