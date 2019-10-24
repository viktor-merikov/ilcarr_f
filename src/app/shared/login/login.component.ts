import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User, UserServiceAbstract} from '../../user/user_abstract';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedUser: User;

  constructor(private userService: UserServiceAbstract) {
  }

  ngOnInit() {
    if (localStorage.getItem('activeAppUser')) {
      this.loggedUser = JSON.parse(localStorage.getItem('activeAppUser')).data;
    }
  }

  logInUser(form: NgForm) {
    this.userService.logInUser(form.value.email, form.value.password).then(data => {
      localStorage.setItem('activeAppUser', JSON.stringify({data}));
      this.loggedUser = data;
    }).catch(err => {
      alert(err.message);
    });
  }

  logout() {
    localStorage.removeItem('activeAppUser');
    this.loggedUser = undefined;
  }

  deleteUser() {
    // TODO
    this.userService.deleteUser(this.loggedUser.email, this.loggedUser.password).then(() => {
        localStorage.removeItem('activeAppUser');
        this.loggedUser = undefined;
      }
    ).catch(err => alert(err.code + ':' + err.message));
  }
}
