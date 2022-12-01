import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  providers: [ConfirmationService, MessageService]
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response.data;
    })
  }

  confirmDelete(event: Event, id: string) {
    this.confirmationService.confirm({
      target: (event.target) as HTMLButtonElement,
      message: 'Are you sure that you want to Delete?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteUser(id);
      },
      reject: () => {
        console.log("Rejected")
      }
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(response => {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'User deleted successfully'});
      this.users = response.data;
    })
  }

}
