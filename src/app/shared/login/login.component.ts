import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User, UserServiceAbstract} from '../../user/user_abstract';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private loggedUser: User;

  constructor(private userService: UserServiceAbstract) {
  }

  ngOnInit() {
    if (localStorage.getItem('activeAppUser')) {
      this.loggedUser = JSON.parse(localStorage.getItem('activeAppUser')).user;
    }
  }

  logInUser(form: NgForm) {
    this.userService.logInUser(form.value.email, form.value.password).then(user => {
      user.email = form.value.email;
      localStorage.setItem('activeAppUser', JSON.stringify({user}));
      localStorage.setItem('TOKEN', btoa(form.value.email + ':' + form.value.password));
      this.loggedUser = user;
    }).catch(err => {
      alert(err.message);
    });
  }
}
