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
import {FormsModule} from '@angular/forms';
import {routes} from './routes';
import {UserServiceAbstract} from '../user/user_abstract';
import {UserService} from '../user/user.service';

@NgModule({
  declarations: [NavHeaderFooterComponent, LoginComponent, MainComponent, SignupComponent, TermsofuseComponent],
  exports: [
    NavHeaderFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    CarsModule,
    UserModule,
    FormsModule
  ]
})
export class SharedModule {
}
