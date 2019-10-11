import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavHeaderFooterComponent} from './nav-header-footer/nav-header-footer.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {SearchComponent} from '../cars/search/search.component';
import {ViewComponent} from '../cars/view/view.component';
import {UploadComponent} from '../cars/upload/upload.component';
import { SignupComponent } from './signup/signup.component';
import {CarsModule} from '../cars/cars.module';
import {UserModule} from '../user/user.module';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'car/search', component: SearchComponent},
  {path: 'car/view', component: ViewComponent},
  {path: 'car/upload', component: UploadComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];


@NgModule({
  declarations: [NavHeaderFooterComponent, LoginComponent, MainComponent, SignupComponent],
  exports: [
    NavHeaderFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    CarsModule,
    UserModule
  ]
})
export class SharedModule {
}
