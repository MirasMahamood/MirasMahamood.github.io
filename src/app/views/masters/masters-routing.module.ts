import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Masters',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users',
        },
      },
      {
        path: 'uom',
        component: BreadcrumbsComponent,
        data: {
          title: 'UoM',
        },
      },
      {
        path: 'part-master',
        component: CardsComponent,
        data: {
          title: 'Part Master',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

