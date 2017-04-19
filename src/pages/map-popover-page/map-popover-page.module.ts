import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPopoverPage } from './map-popover-page';

@NgModule({
  declarations: [
    MapPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPopoverPage)
  ],
  exports: [
    MapPopoverPage
  ]
})
export class MapPopoverPageModule {}
