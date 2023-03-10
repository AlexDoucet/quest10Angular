import { Injectable } from '@angular/core';
import { Cocktails } from 'src/app/cocktail-list/cocktail-interface'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  // idCocktails = [17222, 13501, 17225, 14610] // array pour les numéros d'ID

  cocktails: Cocktails[] = [
    {name : "Mojito",prix : 10, image : "https://media.istockphoto.com/id/105597995/fr/photo/mojito-cocktail.jpg?s=612x612&w=0&k=20&c=lDkUp-ohiRwh66kLK-wPwBNPPBHUQSQJFwVPvEpj9Ww="},
    {name : "Daiquiri",prix : 12, image : "https://media.istockphoto.com/id/817352270/fr/photo/cocktail-margarita-classique-%C3%A0-la-lime-et-le-sel.jpg?s=612x612&w=0&k=20&c=e9btjCl0ZXc_O_PlCAS3cFftfE43-y-jmRVY2I8e4Rw="},
    {name : "Margarita",prix : 13, image : "https://static.vecteezy.com/ti/photos-gratuite/p2/728254-cocktail-daiquiri-fraise-surgele-photo.jpg"},
    {name : "Manhattan",prix : 11.50, image : "https://cdn.diffords.com/contrib/stock-images/2016/4/33/2016b6c73079e3757e1b704ec34776378632.jpg"},
    {name : "Dry Martini",prix : 15, image : "https://cdn.diffords.com/contrib/stock-images/2020/10/5f8d8c4a011f0.jpg"},
    {name : "Old Fashionned",prix : 13, image : "https://media.istockphoto.com/id/1129486696/photo/refreshing-bourbon-old-fashioned-cocktail-on-white.jpg?s=612x612&w=0&k=20&c=8kON0hHLaF8Gr-7toM3gYEnbQNHjHwJw4MsPViROdAg="},
  ]; // initiation de la variable cocktails en array pour pouvoir itérer dessus sur le HTML

  constructor() { }

  getCocktails() {// fonction pour récupérer la valeur des cocktails du service
    return this.cocktails;// return de la variable cocktails du service
  }

  // async setCocktails() {// fonction async pour pouvoir utiliser await

  //   for await (const cocktail of this.idCocktails) {// boucle for await pour itérer les demandes

  //     const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`); // variable pour les appels API avec ID dynamique stocké plus haut dans la variable idCocktails.

  //     const cocktails = await response.json(); // variable pour transformer la variable response en JSON

  //     this.cocktails.push(cocktails.drinks[0]) // on envoie la réponse en pushant dans notre tableau à l'extèrieur de la fonction
  //   }


  }


