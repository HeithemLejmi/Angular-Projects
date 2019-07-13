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

  isAuth = false;
  constructor(private appareilService : AppareilService) {
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
