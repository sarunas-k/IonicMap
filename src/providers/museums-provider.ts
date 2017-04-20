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
        name: 'Tremties ir rezistencijos muziejus',
        description: 'Aprašymas.',
        lat: 54.8929806,
        lng: 23.9251271,
        imageUrl: '../assets/images/pic.jpg'
      },
      {
        name: 'M. K. Ciurlionio dailes muziejus',
        description: 'Aprašymas.',
        lat: 54.9003558,
        lng: 23.9109429,
        imageUrl: '../assets/images/pic.jpg'
      },
      {
        name: 'Vytauto Didžiojo karo muziejus	',
        description: 'Aprašymas.',
        lat: 54.8998822,
        lng: 23.9120006,
        imageUrl: '../assets/images/pic.jpg'
      },
      {
        name: 'Tado Ivanausko zoologijos muziejus',
        description: 'Aprašymas.',
        lat: 54.898067,
        lng: 23.903934,
        imageUrl: '../assets/images/pic.jpg'
      },
      {
        name: 'Kauno tvirtovės VII fortas',
        description: 'Aprašymas.',
        lat: 54.915513,
        lng: 23.9282227,
        imageUrl: '../assets/images/pic.jpg'
      },
      {
        name: 'Lietuvos Liaudies Buities Muziejus',
        description: 'Aprašymas.',
        lat: 54.866405,
        lng: 24.201013,
        imageUrl: '../assets/images/pic.jpg'
      },
      {
        name: 'Lietuvos aviacijos muziejus',
        description: 'Aprašymas.',
        lat: 54.8778491,
        lng: 23.8900917,
        imageUrl: '../assets/images/pic.jpg'
      },
      {
        name: 'Kauno IX forto muziejus	',
        description: 'Aprašymas.',
        lat: 54.943955,
        lng: 23.875282,
        imageUrl: '../assets/images/pic.jpg'
      },
      {
        name: 'Lietuvos dailės muziejus',
        description: 'Aprašymas.',
        lat: 54.6806047,
        lng: 25.288688,
        imageUrl: '../assets/images/pic.jpg'
      },
      {
        name: 'Kauno rajono muziejus',
        description: 'Aprašymas.',
        lat: 54.9431792,
        lng: 23.7844911,
        imageUrl: '../assets/images/pic.jpg'
      }
    ];
  }

}
