import { Component, OnInit } from '@angular/core';
// Services
import { AppareilService } from './service/appareil.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appareils: any[];
  isAuth = false;
  constructor(private appareilService : AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
}
  onAllumer() {
    console.log('Tout Allumer');
  }
}
