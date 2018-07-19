import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HerolistComponent } from './herolist/herolist.component';
import { Test1Component } from './test/test1/test1.component';


@NgModule({
  declarations: [
    AppComponent,
    HerolistComponent,
    Test1Component,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
