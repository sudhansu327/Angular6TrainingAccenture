import { Component } from '@angular/core';

@Component({ 
  selector: 'app-root',
  template:`<div><h1>{{pageTitle}}</h1>
   <div>My First Component2</div>   
   </div>`,
   //template:"<div>My First Angular</div>"  
   // templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']   
})
export class AppComponent { 
  pageTitle :string = 'My First Angular'; 
}
