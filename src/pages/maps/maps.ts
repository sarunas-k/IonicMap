import { MapPopoverPage } from '../map-popover-page/map-popover-page';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Popover } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MuseumsProvider } from '../../providers/museums-provider';
import { PopoverController } from 'ionic-angular';


@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
  providers: [MuseumsProvider]
})
export class MapsPage {

  map;
  museums: IMuseum[];
  @ViewChild('map') mapElement: ElementRef;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation,
    public museumsProvider: MuseumsProvider,
    public popoverCtrl: PopoverController
    ) { }

  ionViewDidLoad(){
    this.initMap();
    this.initMuseums();
  }
 
  initMap(): void {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.geolocation.getCurrentPosition().then(
      (position) => {
        this.map.setOptions({
          center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
          zoom: 11
        });
      },
      (err) => {
      console.log(err);
    });
  }

  initMuseums(): void {
    this.museums = this.museumsProvider.getMuseums();
    let popover: Popover;
    this.museums.forEach((museum: IMuseum, index: number) => {
      new google.maps.Marker({
        position: new google.maps.LatLng(museum.lat, museum.lng),
        map: this.map
      }).addListener('click', (event: Event) => {
        popover = this.popoverCtrl.create(MapPopoverPage, {
          museumIndex: index
        });
        popover.present({
          ev: event
        });
      });
    });
  }
}

export interface IMuseum {
  name: string;
  description: string;
  lat: number;
  lng: number;
}
