export interface User {
  first_name: string;
  second_name: string;
  email: string;
  password: string;
  registration_date?: string;
  comments?: string[];
  booked_cars?: number[];
  history?: string[];
}

export abstract class UserServiceAbstract {

  abstract addUser(user: User): Promise<User>;

  abstract logInUser(email: string, password: string): Promise<User>;

  abstract updateUser(user: User, oldPassword: string): Promise<User>;

  abstract deleteUser(email: string, password: string): Promise<void>;
}
