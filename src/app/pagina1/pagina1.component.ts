import { Component } from '@angular/core';
import { RickMortyService } from '../servicios/rick-morty.service';

 
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {

  episodios:any;
 constructor( private rickMortyService:RickMortyService){
 }

ngOnInit(){
  this.getAllEpisode(1);
}

 getAllEpisode(page:number){

  this.rickMortyService.getAllEpisode(page).subscribe({
    next:(d:any)=>{
      console.log(d.results);
      this.episodios = d.results;
    }, 
    error:(e)=>{
      console.log(e);
    }
  })
}

page1(){
  this.getAllEpisode(1);
}
page2(){
  this.getAllEpisode(2);
}
page3(){
  this.getAllEpisode(3);
}
}
