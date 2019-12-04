import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User, UserServiceAbstract} from '../../user/services/user_abstract';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private loggedUser: User;
  logForm: FormGroup;
  message: string;

  constructor(private userService: UserServiceAbstract, private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param: Params) => {
      if (param.loginAgain) {
        this.message = 'Please login in service.';
      }
    });
    if (localStorage.getItem('activeAppUser')) {
      this.loggedUser = JSON.parse(localStorage.getItem('activeAppUser')).user;
    }
    this.logForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onLogin() {
    if (this.logForm.invalid) {
      return;
    }
    this.userService.logInUser(this.logForm.get('email').value, this.logForm.get('password').value).then(user => {
      user.email = this.logForm.get('email').value;
      localStorage.setItem('activeAppUser', JSON.stringify({user}));
      localStorage.setItem('TOKEN', btoa(this.logForm.get('email').value + ':' + this.logForm.get('password').value));
      this.loggedUser = user;
    }).catch(err => {
      alert(err.message);
    });
  }
}
