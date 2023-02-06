import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail-service.service';
import { Cocktails } from 'src/app/cocktail-list/cocktail-interface'

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {

cocktails : any = [];

constructor(public cocktailService : CocktailService){

}

ngOnInit() {
}

// getCocktails(){// création de la fonction getCocktails
//   this.cocktailService.setCocktails()// appel de la fonction setCocktails du service
// console.log(this.cocktails);
// }

getCocktailsFromService() {// fonction pour assigner la variable cocktails du component à la valeur de la variable cocktails du service
  this.cocktails = this.cocktailService.getCocktails();
}


}
