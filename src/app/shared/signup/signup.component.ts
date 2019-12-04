import {Component, OnInit} from '@angular/core';
import {User, UserServiceAbstract} from '../../user/services/user_abstract';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {error} from 'util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  reqMessage = '';
  suForm: FormGroup;

  constructor(private userService: UserServiceAbstract, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.suForm = this.fb.group({
      first_name: [null, Validators.required],
      second_name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]], // Validators.pattern('((?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12})')
      checkTerms: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.suForm.invalid) {
      return;
    }
    this.userService.addUser(this.suForm.value as User)
      .then(response => {
        console.log(JSON.stringify(response));
        this.reqMessage = 'Successfully registered';
        setTimeout(() => {
          this.reqMessage = '';
          this.suForm.reset();
        }, 2000);
      }).catch(err => {
      alert(err.error.status + err.error.message);
    });
  }
}
