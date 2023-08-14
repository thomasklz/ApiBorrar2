import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor( private http:HttpClient) { }

  getAllEpisode(page:number){
    return this.http.get('https://rickandmortyapi.com/api/episode?page='+page);
  }

 

}
 