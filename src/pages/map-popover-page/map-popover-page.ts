import { IMuseum } from '../maps/maps';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MuseumsProvider } from '../../providers/museums-provider';

@Component({
  selector: 'page-map-popover-page',
  templateUrl: 'map-popover-page.html',
  providers: [MuseumsProvider]
})
export class MapPopoverPage {
  name: string;
  description: string;
  imageUrl: string; 
  museum: IMuseum;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public museumsProvider: MuseumsProvider) {
  }

  ionViewDidLoad() {
    let museumIndex = this.navParams.get('museumIndex');
    this.museum = this.museumsProvider.getMuseumByIndex(museumIndex);
    this.name = this.museum.name;
    this.imageUrl = this.museum.imageUrl;
    this.description = this.museum.description;
  }

}
