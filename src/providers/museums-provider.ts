import { IMuseum } from '../pages/maps/maps';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MuseumsProvider {

  museums: IMuseum[];

  constructor(public http: Http) {
    this.initData();
  }
 
  getMuseums() {
    /*
     * Data fetching from server or API could be here
     */
    return this.museums;
  }

  getMuseumByIndex(index: number) {
    if (!this.museums || !this.museums[index])
      return;
    
    return this.museums[index];
  }

  initData() {
    this.museums = [
      {
        name: 'Kauno dramos teatras',
        description: 'Nacionalinis Kauno dramos teatras – pirmasis profesionalus stacionarus dramos teatras Lietuvoje.',
        lat: 54.89736,
        lng: 23.910788
      },
      {
        name: 'Kauno valstybinis muzikinis teatras',
        description: 'Kauno valstybinis muzikinis teatras – muzikinio profilio teatras Kaune.',
        lat: 54.896416,
        lng: 23.906166
      },
      {
        name: 'Kauno miesto kamerinis teatras',
        description: 'Kauno kamerinis teatras – savivaldybės įvairaus žanro teatras Kaune, Kęstučio g. 74A.',
        lat: 54.896566,
        lng: 23.9077949
      },
      {
        name: 'Kauno valstybinis lėlių teatras',
        description: 'Kauno valstybinis lėlių teatras – valstybinis lėlių teatras vaikams. Įsteigtas 1958 m.',
        lat: 54.8972591,
        lng: 23.9073316
      },
      {
        name: 'Kauno mažasis teatras',
        description: 'Kauno mažasis teatras - Edukacinė programa vaikams',
        lat: 54.898158,
        lng: 23.892059
      }
    ];
  }

}
