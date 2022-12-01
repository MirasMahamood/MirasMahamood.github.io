import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      title: 'Masters',
    },
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule)
      },
      {
        path: 'uom',
        loadChildren: () =>
        import('./uom/uom.module').then((m) => m.UoMModule)
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
export class MastersRoutingModule {}

