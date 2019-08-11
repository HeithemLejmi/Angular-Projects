export class AppareilService {
    appareils = [
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
      switchOnOne(i: number) {
        this.appareils[i].status = 'allumé';
      }
      switchOffOne(i: number) {
        this.appareils[i].status = 'éteint';
      }
      getAppareilById(id: number) {
        const appareil = this.appareils.find(
                        (s) => {
                                return s.id === id;
                                }
                         );
      return appareil;
      }
}
