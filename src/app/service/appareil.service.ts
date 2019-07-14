export class AppareilService {
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
      switchOnAll() {
      for (let appareil of this.appareils) {
        appareil.status = 'allumé';
      }
      }
      switchOffAll() {
        for (let appareil of this.appareils) {
          appareil.status = 'éteint';
        }
      }
}
