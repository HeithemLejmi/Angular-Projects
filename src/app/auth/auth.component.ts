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

}
