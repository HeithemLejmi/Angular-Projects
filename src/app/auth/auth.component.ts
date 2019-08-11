import { Component, OnInit } from '@angular/core';
// Services
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  /* Create a local property "authStatus"
   * that 's gonna represent/correspond to the isAuth property from the authservice*/
  authStatus: boolean;

  /**
   * Constructor with the injected service "AuthService"
   * and the "Router" that we gonna use for the programmed automatic navigation
   */
  constructor(private authService: AuthService, private router: Router) {
  }
/**
 * ngOnInit method to initialize the local property authStatus 
 * based on the isAuth property from the service
 */
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
  /**
   * this method will allow the app to react to the event click on the button "Connect"
   * Cette méthode va déclencher la méthode "signIn()" de notre service authService
   */
onSignIn() {
  /* .then() is a method associated with any async method (in this case: the async method signIn())
  .then() va nous permettre de réagir au callback "()=>" çad déterminer qu'est ce on exécute comme code
  si la promise est resolve*/ 
  this.authService.signIn().then(
    () => {
      /* le code à exécuter quand la Promise est resolve*/
      console.log('la connexion réussie !');
      // mettre à jour l'état de connexion après la click au boutton "Connect"
      this.authStatus = this.authService.isAuth;
      // we execute the method "navigate()" of this.router 
      // to allow us to navigate to the path 'appareils' once we are connected
      this.router.navigate(['appareils']);
    }
  );
}
/**
  * this method will allow the app to react to the event click on the button "Disconnect"
  * Cette méthode va déclencher la méthode "signOut()" de notre service authService
  */
onSignOut() {
  /* Since the metod "signOut()" of the authService is not async, 
  so there will be no need to use the .then() method
  we cann simply call directly the method signOut()*/ 
  this.authService.signOut();
  // mettre à jour l'état de connexion après la click au boutton "Disconnect"
  this.authStatus = this.authService.isAuth;
}
}
