import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from './user';

import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response.data;
    })
  }
}
