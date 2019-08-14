import { Component, OnInit } from '@angular/core';
// cet import sert à rendre disponible le type Observable, 
import { Observable } from 'rxjs/Observable';
// importer la méthode  interval(): qui crée un Observable qui émet un chiffre croissant à intervalles réguliers 
// ...et qui prend le nombre de millisecondes souhaité pour l'intervalle comme argument.
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
secondes: number;
  ngOnInit() {
    
    const counter = Observable.interval(1000);
    // Maintenant on a un Observable, il faut l'observer !
    // => Pour cela on utilise un "subscribe", pour se soucrire à l'observable counter

//Maintenant vous allez souscrire à l'Observable et créer trois fonctions :
    counter.subscribe(
      // I) la première va se déclencher à chaque émission de données par l'Observable 
      // et va attribuer cette valeur à la variable "secondes" ;
      (value) => {
        this.secondes = value;
      },
      // II) la deuxième gèrera toute erreur éventuelle ;
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      // III) la troisième se déclenchera si l'Observable s'achève :
      () => {
        console.log('Observable complete!');
      }
    );
  }
}
