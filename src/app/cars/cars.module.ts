import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {ViewComponent} from './view/view.component';
import {UploadComponent} from './upload/upload.component';
import {TopThreeCarsComponent} from './top-three-cars/top-three-cars.component';
import {UserModule} from '../user/user.module';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarCardComponent} from './car-card/car-card.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {NpnSliderModule} from 'npn-slider';
import {CloudinaryModule} from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import {CarAbstract} from './services/cars-service-abstract';
import {CarsService} from './services/cars.service';
import {FiltersComponent} from './search/filters/filters.component';
import {MapComponent} from './search/map/map.component';
import {RouterModule} from '@angular/router';
import {SearchFormComponent} from './search/search-form/search-form.component';

@NgModule({
  declarations: [SearchComponent, ViewComponent, UploadComponent, TopThreeCarsComponent, CarCardComponent, FiltersComponent, MapComponent, SearchFormComponent],
  imports: [
    CommonModule,
    UserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey
    }),
    FormsModule,
    GooglePlaceModule,
    NpnSliderModule,
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: environment.cloudDinary.cloud_name}),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: 'search', component: SearchComponent, children: [
        {path: '', component: SearchFormComponent},
        {path: 'filters', component: FiltersComponent},
        {path: 'map', component: MapComponent}
      ]
    }])
  ],
  exports: [
    SearchComponent,
    ViewComponent,
    UploadComponent,
    TopThreeCarsComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: CarAbstract, useClass: CarsService}]
})
export class CarsModule {
}
