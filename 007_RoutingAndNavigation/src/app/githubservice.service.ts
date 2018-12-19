import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {

  url = 'https://api.github.com/users/devendradora/followers';

  constructor(private http: Http) { 
    
  }

  getAll() {
    return this.http.get(this.url)
  }

   getHttp(url1)
   {
     return this.http.get(url1);
   }
  
}