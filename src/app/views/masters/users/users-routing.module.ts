import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Users' },
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'list'
      },
      {
        path: 'list', component: UsersListComponent,
        data: { title: 'List' }
      },
      {
        path: 'create', component: CreateEditUserComponent,
        data: { title: 'Create' }
      },
      {
        path: 'edit/:id', component: CreateEditUserComponent,
        data: { title: 'Edit' }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }

