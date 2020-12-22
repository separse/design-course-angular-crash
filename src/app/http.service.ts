import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  testFunc() {
    console.log('Here I Am!');    
  }

  getBreweries() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
