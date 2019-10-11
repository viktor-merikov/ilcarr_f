import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {ViewComponent} from './view/view.component';
import {UploadComponent} from './upload/upload.component';
import {FiltersComponent} from './filters/filters.component';
import {MapComponent} from './map/map.component';
import {TopThreeCarsComponent} from './top-three-cars/top-three-cars.component';
import {UserModule} from '../user/user.module';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../environments/environment';
import {FormsModule} from '@angular/forms';
import { CarCardComponent } from './car-card/car-card.component';

@NgModule({
  declarations: [SearchComponent, ViewComponent, UploadComponent, FiltersComponent, MapComponent, TopThreeCarsComponent, CarCardComponent],
  imports: [
    CommonModule,
    UserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey
    }),
    FormsModule
  ],
  exports: [
    SearchComponent,
    ViewComponent,
    UploadComponent,
    TopThreeCarsComponent
  ]

})
export class CarsModule {
}
