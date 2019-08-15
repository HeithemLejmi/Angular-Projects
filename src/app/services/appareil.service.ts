import { Subject } from 'rxjs';

export class AppareilService {
  
  appareilsSubject = new Subject<any[]>();
  
  private appareils = [
        {
          id: 1,
          name: 'PC',
          status: 'éteint'
        },
        { 
          id: 2,
          name: 'TV',
          status: 'allumé'
        },
        {
          id: 3,
          name: 'Machine à Laver',
          status: 'éteint'
        }
      ];

emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

getAppareilById(id: number) {
  const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
  return appareil;
}

switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
}

switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
      this.emitAppareilSubject();
    }
}

switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
}

switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
}
}
