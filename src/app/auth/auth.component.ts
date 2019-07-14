import { Component, OnInit } from '@angular/core';
// Services
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
onSignIn() {
  this.authService.signIn().then(
    () => {
      console.log('la connexion réussie !');
      this.authStatus = this.authService.isAuth;
    }
  );
}
onSignOut() {
  this.authService.signOut();
  this.authStatus = this.authService.isAuth;
}
}
