import {Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {TermsofuseComponent} from './termsofuse/termsofuse.component';
import {SearchComponent} from '../cars/search/search.component';
import {UploadComponent} from '../cars/upload/upload.component';

export const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
  {path: 'termsofuse', component: TermsofuseComponent},
  {path: 'search', component: SearchComponent},
  {path: 'car/upload', component: UploadComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];
