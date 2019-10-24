import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackComponent} from './feedback/feedback.component';
import {UserServiceAbstract} from './user_abstract';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [FeedbackComponent],
  providers: [{provide: UserServiceAbstract, useClass: UserService}]
})
export class UserModule {
}
