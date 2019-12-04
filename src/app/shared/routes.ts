import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {TermsofuseComponent} from './termsofuse/termsofuse.component';
import {UploadComponent} from '../cars/upload/upload.component';
import {ViewComponent} from '../cars/view/view.component';
import {AuthGuard} from '../user/services/auth.guard';

export const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'termsofuse', component: TermsofuseComponent},
  {path: 'car/upload', component: UploadComponent, canActivate: [AuthGuard]},
  {path: 'view', component: ViewComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'main'}
];
