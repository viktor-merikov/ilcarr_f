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
import {RouterModule, Routes} from '@angular/router';
import {NpnSliderModule} from 'npn-slider';
import {CloudinaryModule} from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import {CarServiceAbstract} from './cars-service-abstract';
import {CarsService} from './cars.service';

const routes: Routes = [
  {path: 'view', component: ViewComponent}
];

@NgModule({
  declarations: [SearchComponent, ViewComponent, UploadComponent, TopThreeCarsComponent, CarCardComponent],
  imports: [
    CommonModule,
    UserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapApiKey
    }),
    FormsModule,
    GooglePlaceModule,
    RouterModule.forRoot(routes),
    NpnSliderModule,
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: environment.cloudDinary.cloud_name}),
    ReactiveFormsModule
  ],
  exports: [
    SearchComponent,
    ViewComponent,
    UploadComponent,
    TopThreeCarsComponent
  ],
  providers: [{provide: CarServiceAbstract, useClass: CarsService}]
})
export class CarsModule {
}
