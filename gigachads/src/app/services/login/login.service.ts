import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user/user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private fakeUserUrl = 'assets/fake_user.json';

  auth: boolean = false;
  private currentAuth = new BehaviorSubject(false);
  sharedAuth = this.currentAuth.asObservable();
  
  constructor(private http: HttpClient, private router: Router) {}

  isAuth(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  verifyUser(users: [], user: User) {
    if (
      users.find(
        (u: User) => u.login === user.login && u.password === user.password
      )
    )
      return true;
    else {
      let storedUsers = localStorage.getItem('users');
      let OK = false;
      if (storedUsers) {
        JSON.parse(storedUsers).forEach((e: any) => {
          if (e.user.login === user.login && e.user.password === user.password) OK = true;
        });
      }
      return OK
    }
  }

  loginUser(user: User) {
    let users = this.http.get(this.fakeUserUrl).subscribe((users: any) => {
      if (this.verifyUser(users.users, user)) {
        localStorage.setItem('auth', 'true');
        this.currentAuth.next(this.isAuth());
        console.log('Logged in successfuly');
        this.router.navigate(["catalogue"])
      } else {
        console.log('Invalid username or password');
        alert('Invalid username or password');
      }
    });
  }

  registerUser(user: User) {
    let users = this.http.get(this.fakeUserUrl).subscribe((users: any) => {
      if (this.verifyUser(users.users, user)) {
        console.log('This user already exists');
        alert('This user already exists');
      } else {
        if (user.login.length && user.password.length >= 8) {
          localStorage.setItem('auth', 'true');
          let storedUsers = localStorage.getItem('users');
          let curUsers = storedUsers ? JSON.parse(storedUsers) : [];
          curUsers.push({ user });
          localStorage.setItem('users', JSON.stringify(curUsers));
          this.currentAuth.next(this.isAuth());
          console.log('Registered in successfuly');
          this.router.navigate(["catalogue"])
        } else {
          console.log('Invalid username or password');
          alert('Invalid username or password');
        }
      }
    });
  }
}
