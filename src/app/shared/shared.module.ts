import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavHeaderFooterComponent} from './nav-header-footer/nav-header-footer.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {SignupComponent} from './signup/signup.component';
import {CarsModule} from '../cars/cars.module';
import {UserModule} from '../user/user.module';
import {TermsofuseComponent} from './termsofuse/termsofuse.component';
import {routes} from './routes';

@NgModule({
  declarations: [NavHeaderFooterComponent, LoginComponent, MainComponent, SignupComponent, TermsofuseComponent],
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
