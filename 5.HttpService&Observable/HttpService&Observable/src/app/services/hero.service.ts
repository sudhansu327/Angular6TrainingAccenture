import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {
private serviceUrl="http://localhost:50133/api/Hero/GetIndianHeroes";

  constructor(private httpService:HttpClient) { }

  getIndianHeroes():Observable<any>{
    return this.httpService.get(this.serviceUrl);     
  }
}