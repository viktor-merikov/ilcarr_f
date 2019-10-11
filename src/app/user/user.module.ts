import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [FeedbackComponent],
  imports: [
    CommonModule
  ],
  exports: [FeedbackComponent]
})
export class UserModule { }
