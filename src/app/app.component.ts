import { Component, OnInit, OnDestroy } from '@angular/core';
// cet import sert à rendre disponible le type Observable, 
import { Observable } from 'rxjs';
// importer la méthode  interval(): qui crée un Observable qui émet un chiffre croissant à intervalles réguliers 
// ...et qui prend le nombre de millisecondes souhaité pour l'intervalle comme argument.
import { interval } from 'rxjs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

secondes: number;
// Ce variable sert à stocker la souscription dans un objet Subscription:
// ainsi le retour de subscribe() souscrit à l'observable sera stocké dans cet objet Subscription
// et lors de la destruction de ce component: on unsbscribe cet objet 
counterSubscription: Subscription;

  ngOnInit() {
    
    const counter = interval(1000);
    // Maintenant on a un Observable, il faut l'observer !
    // => Pour cela on utilise un "subscribe", pour se soucrire à l'observable counter
//Maintenant vous allez souscrire à l'Observable et créer trois fonctions I, II, III:
    
    this.counterSubscription = counter.subscribe(
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
    ngOnDestroy() {
    // La fonction  unsubscribe()  détruit la souscription 
    //...et empêche les comportements inattendus liés aux Observables infinis,
    this.counterSubscription.unsubscribe();
  }
}
