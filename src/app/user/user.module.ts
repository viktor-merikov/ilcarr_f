import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedbackComponent} from './feedback/feedback.component';
import {UserServiceAbstract} from './user_abstract';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {UserCabinetComponent} from './user-cabinet/user-cabinet.component';
import {ModalDialogComponent} from './modal-dialog/modal-dialog.component';
import {MyCarsComponent} from './my-cars/my-cars.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [FeedbackComponent, UserCabinetComponent, ModalDialogComponent, MyCarsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{path: 'user/mycars', component: MyCarsComponent}])
  ],
  exports: [FeedbackComponent, UserCabinetComponent],
  providers: [{provide: UserServiceAbstract, useClass: UserService}]
})
export class UserModule {
}
