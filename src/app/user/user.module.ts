import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackComponent} from './feedback/feedback.component';
import {UserServiceAbstract} from './services/user_abstract';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {UserCabinetComponent} from './user-cabinet/user-cabinet.component';
import {ModalDialogComponent} from './modal-dialog/modal-dialog.component';
import {MyCarsComponent} from './my-cars/my-cars.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './services/auth.guard';


@NgModule({
  declarations: [FeedbackComponent, UserCabinetComponent, ModalDialogComponent, MyCarsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{path: 'user/mycars', component: MyCarsComponent, canActivate: [AuthGuard]}])
  ],
  exports: [FeedbackComponent, UserCabinetComponent],
  providers: [{provide: UserServiceAbstract, useClass: UserService}, AuthGuard]
})
export class UserModule {
}
