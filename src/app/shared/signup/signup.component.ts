import {Component, OnInit} from '@angular/core';
import {UserServiceAbstract} from '../../user/user_abstract';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  reqMessage = '';

  constructor(private userService: UserServiceAbstract) {
  }

  ngOnInit() {
  }

  registrationUser(form: NgForm) {
    if (form === undefined) {
      return;
    } else {
      this.userService.addUser({
        email: form.value.email,
        password: form.value.password,
        first_name: form.value.firstName,
        second_name: form.value.lastName
      }).then(data => {
        console.log(JSON.stringify(data));
        this.reqMessage = 'Successfully registered';
        setTimeout(() => {
          this.reqMessage = '';
          form.reset();
        }, 2000);
      }).catch(err => {
        alert(err.error.status + ' email already exist');
      });
    }
  }

}
