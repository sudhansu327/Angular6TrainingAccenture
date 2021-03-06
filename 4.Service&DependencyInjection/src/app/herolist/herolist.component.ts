import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

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


  constructor(private heroService:HeroService) { }
ngOnInit(){
  this.filterByName='Naren';
  this.checkValue=true;
  this.selectedRadio='Male';

  this.heroes=this.heroService.getIndianHeroes();
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
