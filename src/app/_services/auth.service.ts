import { Injectable } from '@angular/core';
import { User } from '../_modules/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  constructor() { }
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(user:User){
    this.currentUser=user
    console.log(this.currentUser)
  }

  logout(): void {
    this.currentUser = null;
  }
 
}
