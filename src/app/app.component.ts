import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appareils = [
    {
      name: 'PC',
      status: 'éteint'
    },
    {
      name: 'TV',
      status: 'allumé'
    },
    {
      name: 'Machine à Laver',
      status: 'éteint'
    }
  ];
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  isAuth = false;
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('Tout Allumer');
  }
}
