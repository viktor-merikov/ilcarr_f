import {Injectable} from '@angular/core';
import {User, UserServiceAbstract} from './user_abstract';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const serverURL = environment.serverURL;

@Injectable({
  providedIn: 'root'
})

export class UserService implements UserServiceAbstract {


  constructor(private httpClient: HttpClient) {
  }

  addUser(user: User): Promise<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(user.email + ':' + user.password)
      })
    };
    return this.httpClient.post<User>(serverURL + '/registration', {
      first_name: user.first_name,
      second_name: user.second_name
    }, httpOptions).toPromise();
  }

  deleteUser(email: string, password: string): Promise<void> {
    console.log(email + ':' + password);
    const authHeader = new HttpHeaders(
      {'Authorization': 'Basic ' + btoa(email + ':' + password)}
    );
    return this.httpClient.delete<void>(serverURL + '/user', {headers: authHeader}).toPromise();
  }

  logInUser(email: string, password: string): Promise<User> {
    const authHeader = new HttpHeaders(
      {'Authorization': 'Basic ' + btoa(email + ':' + password)}
    );
    return this.httpClient.get<User>(serverURL + '/user/login', {headers: authHeader}).toPromise();
  }

  updateUser(user: User, oldPassword: string): Promise<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(user.email + ':' + oldPassword),
        'X-New-Password': user.password
      })
    };
    return this.httpClient.post<User>(serverURL + '/registration', {
      first_name: user.first_name,
      second_name: user.second_name
    }, httpOptions).toPromise();
  }

}
