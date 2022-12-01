import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as data from 'src/assets/data/users.json'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = (data as any).default;

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    user.id = "" + Math.random() * 1000;
    this.userList.unshift(user)
    let responseData = {
      data: user,
    }
    return of(responseData)
  }

  deleteUser(id: string) {
    const index = this.userList.findIndex(u => u.id == id);
    this.userList.splice(index, 1)
    let responseData = {
      data: this.userList
    }
    return of(responseData)
  }

  getAllUsers() {
    let responseData = {
      data: this.userList
    }
    return of(responseData)
  }

  getUserById(id: string) {
    let user = this.userList.find(u => u.id === id)
    let responseData = {
      data: user
    }
    return of(responseData)
  }

  updateUser(user: User) {
    const index = this.userList.findIndex(u => u.id === user.id);
    this.userList.splice(index, 1);
    this.userList.unshift(user);
    let responseData = {
      data: user,
    }
    return of(responseData)
  }
}
