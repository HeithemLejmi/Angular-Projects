import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appareilOne = 'PC';
  appareilTwo = 'TV';
  appareilThree = 'Machine à Laver';
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
    resolve(date);
    }, 2000);
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