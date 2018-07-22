import { Component } from '@angular/core';

@Component({ 
  selector: 'app-root',
  // template:`<div><h1>{{pageTitle}}</h1>
  //  <div>{{pageMessage}}</div>
  //  <div>{{student.Name}}</div>
  //  <app-herolist></app-herolist>
  //  </div>`,
   //template:"<div>My First Angular</div>"  
   templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']   
})
export class AppComponent { 
  pageTitle :string = 'My Angular Application';  
  
  getTitle():string{
    return "Welcome to My Angular Application"
  }
}
