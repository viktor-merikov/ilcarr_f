import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user_abstract';

@Component({
  selector: 'app-user-cabinet',
  templateUrl: './user-cabinet.component.html',
  styleUrls: ['./user-cabinet.component.css']
})

export class UserCabinetComponent implements OnInit {
  @Input() loggedUser: User;
  @Output() userLogOut = new EventEmitter();
  private activateDialog = false;

  constructor() {
  }

  ngOnInit() {
  }

  closeModal(event) {
    if (event) {
      this.logout();
      this.deleteAccount();
    }
    this.activateDialog = false;
  }

  logout() {
    localStorage.removeItem('activeAppUser');
    localStorage.removeItem('TOKEN');
    this.userLogOut.emit();
  }

  deleteUser() {
    this.activateDialog = true;
  }

  deleteAccount() {
    // TODO
    console.log('Account deleted');
    // this.userService.deleteUser(this.loggedUser.email, this.loggedUser.password).then(() => {
    //     localStorage.removeItem('activeAppUser');
    //     localStorage.removeItem('TOKEN');
    //     this.loggedUser = undefined;
    //   }
    // ).catch(err => alert(err.code + ':' + err.message));
  }

}
